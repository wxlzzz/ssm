package com.ssm.controller;

import com.ssm.controller.TopicController;
import com.ssm.async.EventModel;
import com.ssm.async.EventProducer;
import com.ssm.async.EventType;
import com.ssm.model.*;
import com.ssm.service.*;
import com.ssm.util.RedisKeyUtil;
import com.ssm.util.WendaUtil;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;

import java.util.*;

/**
 * Created by nowcoder on 2016/7/30.
 */
@Controller
public class FollowController {
    @Autowired
    FollowService followService;

    @Autowired
    CommentService commentService;

    @Autowired
    QuestionService questionService;

    @Autowired
    UserService userService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    EventProducer eventProducer;

    @Autowired
    TopicService topicService;

    @RequestMapping(value = "/followUser", method = {RequestMethod.POST, RequestMethod.GET})
    public String followUser(@RequestParam("userId") int userId,@RequestParam("next") String next) {
        if (hostHolder.getUser() == null) {
            return WendaUtil.getJSONString(999);
        }
        boolean ret = followService.follow(hostHolder.getUser().getId(), EntityType.ENTITY_USER, userId);

        eventProducer.fireEvent(new EventModel(EventType.FOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(userId)
                .setEntityType(EntityType.ENTITY_USER).setEntityOwnerId(userId));

        // 返回关注的人数
        return "redirect:"+next;
    }

    @RequestMapping(value = "/unfollowUser", method = {RequestMethod.POST})

    public String unfollowUser(@RequestParam("userId") int userId,@RequestParam("next") String next) {
        if (hostHolder.getUser() == null) {
            return WendaUtil.getJSONString(999);
        }
        boolean ret = followService.unfollow(hostHolder.getUser().getId(), EntityType.ENTITY_USER, userId);

        eventProducer.fireEvent(new EventModel(EventType.UNFOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(userId)
                .setEntityType(EntityType.ENTITY_USER).setEntityOwnerId(userId));

        // 返回关注的人数
        return "redirect:"+next;
    }

    @RequestMapping(value = "/followQuestion", method = {RequestMethod.POST})

    public String followQuestion(@RequestParam("questionId") int questionId,
                                 @RequestParam("next") String next) {
        if (hostHolder.getUser() == null) {
            return WendaUtil.getJSONString(999);
        }

        Question q = questionService.getById(questionId);
        if (q == null) {
            return WendaUtil.getJSONString(1, "问题不存在");
        }

        boolean ret = followService.follow(hostHolder.getUser().getId(), EntityType.ENTITY_QUESTION, questionId);

        eventProducer.fireEvent(new EventModel(EventType.FOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(questionId)
                .setEntityType(EntityType.ENTITY_QUESTION).setEntityOwnerId(q.getUserId()));

        Map<String, Object> info = new HashMap<String, Object>();
        info.put("headUrl", hostHolder.getUser().getHeadUrl());
        info.put("name", hostHolder.getUser().getName());
        info.put("id", hostHolder.getUser().getId());
        info.put("count", followService.getFollowerCount(EntityType.ENTITY_QUESTION, questionId));
        return "redirect:"+next;

    }

    @RequestMapping(value = "/unfollowQuestion", method = {RequestMethod.POST})

    public String unfollowQuestion(@RequestParam("questionId") int questionId,@RequestParam("next") String next) {
        if (hostHolder.getUser() == null) {
            return WendaUtil.getJSONString(999);
        }

        Question q = questionService.getById(questionId);
        if (q == null) {
            return WendaUtil.getJSONString(1, "问题不存在");
        }

        boolean ret = followService.unfollow(hostHolder.getUser().getId(), EntityType.ENTITY_QUESTION, questionId);

        eventProducer.fireEvent(new EventModel(EventType.UNFOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(questionId)
                .setEntityType(EntityType.ENTITY_QUESTION).setEntityOwnerId(q.getUserId()));

        Map<String, Object> info = new HashMap<String, Object>();
        info.put("id", hostHolder.getUser().getId());
        info.put("count", followService.getFollowerCount(EntityType.ENTITY_QUESTION, questionId));
        return "redirect:"+next;
    }

    @RequestMapping(value = "/followTopic", method = {RequestMethod.POST})

    public String followTopic(Model model,@RequestParam("topicId") int topicId,@RequestParam("next") String next) {


        boolean ret = followService.follow(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC, topicId);

        eventProducer.fireEvent(new EventModel(EventType.FOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(topicId)
                .setEntityType(EntityType.ENTITY_TOPIC).setEntityOwnerId(topicId));

        // 返回关注的人数
        //return WendaUtil.getJSONString(ret ? 0 : 1, String.valueOf(followService.getFolloweeCount(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC)));

//        Topic topic = topicService.selectTopicById(topicId);
//        model.addAttribute("topic",topic);
//        List<Question> list = questionService.selectByTopicName("name");
//        model.addAttribute("questionList",list);
//        model.addAttribute("followCount",followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
//        if (hostHolder.getUser() != null) {
//            model.addAttribute("followed", followService.isFollower(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC, topicId));
//        } else {
//            model.addAttribute("followed", false);
//        }
//        //将话题关注人数写入数据库
//        topicService.updateFollowCount(topicId,followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
//        return "topicdetail";
        topicService.updateFollowCount(topicId,followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
        return "redirect:/topic/"+topicId;
    }

    @RequestMapping(value = "/unfollowTopic", method = {RequestMethod.POST})

    public String unfollowTopic(Model model,@RequestParam("topicId") int topicId) {


        boolean ret = followService.unfollow(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC, topicId);

        eventProducer.fireEvent(new EventModel(EventType.UNFOLLOW)
                .setActorId(hostHolder.getUser().getId()).setEntityId(topicId)
                .setEntityType(EntityType.ENTITY_TOPIC).setEntityOwnerId(topicId));

        // 返回关注的人数
        //return WendaUtil.getJSONString(ret ? 0 : 1, String.valueOf(followService.getFolloweeCount(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC)));

//        Topic topic = topicService.selectTopicById(topicId);
//        model.addAttribute("topic",topic);
//        List<Question> list = questionService.selectByTopicName("name");
//        model.addAttribute("followCount",followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
//        model.addAttribute("questionList",list);
//        if (hostHolder.getUser() != null) {
//            model.addAttribute("followed", followService.isFollower(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC, topicId));
//        } else {
//            model.addAttribute("followed", false);
//        }
//        //将话题关注人数写入数据库
//        topicService.updateFollowCount(topicId,followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
//        return "topicdetail";

        topicService.updateFollowCount(topicId,followService.getFollowerCount(EntityType.ENTITY_TOPIC,topicId));
        return "redirect:/topic/"+topicId;
    }

    @RequestMapping(value = "/user/{uid}/followers", method = {RequestMethod.GET})
    public String followers(Model model, @PathVariable("uid") int userId) {
        List<Integer> followerIds = followService.getFollowers(EntityType.ENTITY_USER, userId, 0, 10);
        if (hostHolder.getUser() != null) {
            model.addAttribute("followers", getUsersInfo(hostHolder.getUser().getId(), followerIds));
        } else {
            model.addAttribute("followers", getUsersInfo(0, followerIds));
        }
        model.addAttribute("followerCount", followService.getFollowerCount(EntityType.ENTITY_USER, userId));
        model.addAttribute("curUser", userService.getUser(userId));
        //用户信息
        User user = userService.getUser(userId);
        ViewObject vo = new ViewObject();
        vo.set("user", user);
        vo.set("commentCount", commentService.getUserCommentCount(userId));
        vo.set("followerCount", followService.getFollowerCount(EntityType.ENTITY_USER, userId));
        vo.set("followeeCount", followService.getFolloweeCount(userId, EntityType.ENTITY_USER));
        vo.set("followTopicCount",followService.getFolloweeCount(userId,EntityType.ENTITY_TOPIC));
        model.addAttribute("profileUser", vo);
        return "followers";
    }

    @RequestMapping(value = "/user/{uid}/followees", method = {RequestMethod.GET})
    public String followees(Model model, @PathVariable("uid") int userId) {
        List<Integer> followeeIds = followService.getFollowees(userId, EntityType.ENTITY_USER, 0, 10);

        if (hostHolder.getUser() != null) {
            model.addAttribute("followees", getUsersInfo(hostHolder.getUser().getId(), followeeIds));
        } else {
            model.addAttribute("followees", getUsersInfo(0, followeeIds));
        }
        //用户信息
        User user = userService.getUser(userId);
        ViewObject vo = new ViewObject();
        vo.set("user", user);
        vo.set("commentCount", commentService.getUserCommentCount(userId));
        vo.set("followerCount", followService.getFollowerCount(EntityType.ENTITY_USER, userId));
        vo.set("followeeCount", followService.getFolloweeCount(userId, EntityType.ENTITY_USER));
        vo.set("followTopicCount",followService.getFolloweeCount(userId,EntityType.ENTITY_TOPIC));
        model.addAttribute("profileUser", vo);
        model.addAttribute("followeeCount", followService.getFolloweeCount(userId, EntityType.ENTITY_USER));
        model.addAttribute("curUser", userService.getUser(userId));
        return "followees";
    }

    private List<ViewObject> getUsersInfo(int localUserId, List<Integer> userIds) {
        List<ViewObject> userInfos = new ArrayList<ViewObject>();
        for (Integer uid : userIds) {
            User user = userService.getUser(uid);
            if (user == null) {
                continue;
            }
            ViewObject vo = new ViewObject();
            vo.set("user", user);
            vo.set("commentCount", commentService.getUserCommentCount(uid));
            vo.set("followerCount", followService.getFollowerCount(EntityType.ENTITY_USER, uid));
            vo.set("followeeCount", followService.getFolloweeCount(uid, EntityType.ENTITY_USER));
            vo.set("followTopicCount",followService.getFolloweeCount(uid,EntityType.ENTITY_TOPIC));
            if (localUserId != 0) {
                vo.set("followed", followService.isFollower(localUserId, EntityType.ENTITY_USER, uid));
            } else {
                vo.set("followed", false);
            }
            userInfos.add(vo);
        }
        return userInfos;
    }

}
