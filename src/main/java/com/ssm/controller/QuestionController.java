package com.ssm.controller;

import com.ssm.model.*;

import com.ssm.service.*;
import com.ssm.util.WendaUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

/**
 * Created by nowcoder on 2016/7/22.
 */
@Controller
public class QuestionController {
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    QuestionService questionService;

    @Autowired
    CommentService commentService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    UserService userService;

    @Autowired
    LikeService likeService;

    @Autowired
    TopicService topicService;

    @Autowired
    FollowService followService;

    @RequestMapping(value = "/question/{qid}", method = {RequestMethod.GET})
    public String questionDetail(Model model, @PathVariable("qid") int qid) {
        Question question = questionService.getById(qid);
        User user = userService.getUser(question.getUserId());
        model.addAttribute("question", question);
        model.addAttribute("quser",user);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String date = sdf.format(question.getCreatedDate());
        model.addAttribute("questionDate",date);
        List<Comment> commentList = commentService.getCommentsByEntity(qid, EntityType.ENTITY_QUESTION);
        List<ViewObject> vos = new ArrayList<ViewObject>();
        for (Comment comment : commentList) {
            ViewObject vo = new ViewObject();

            String s = sdf.format(comment.getCreatedDate());
            vo.set("createdDate",s);
            vo.set("comment", comment);
            if (hostHolder.getUser() == null) {
                vo.set("liked", 0);
            } else {
                vo.set("liked", likeService.getLikeStatus(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, comment.getId()));
            }

            vo.set("likeCount", likeService.getLikeCount(EntityType.ENTITY_COMMENT, comment.getId()));
            vo.set("user", userService.getUser(comment.getUserId()));
            vos.add(vo);
        }
        model.addAttribute("comments", vos);

        // 获取关注的用户信息
        List<ViewObject> followUsers = new ArrayList<ViewObject>();
        List<Integer> users = followService.getFollowers(EntityType.ENTITY_QUESTION, qid, 20);
        for (Integer userId : users) {
            ViewObject vo = new ViewObject();
            User u = userService.getUser(userId);
            if (u == null) {
                continue;
            }
            vo.set("name", u.getName());
            vo.set("headUrl", u.getHeadUrl());
            vo.set("id", u.getId());
            followUsers.add(vo);
        }
        model.addAttribute("followUsers", followUsers);
        if (hostHolder.getUser() != null) {
            model.addAttribute("followed", followService.isFollower(hostHolder.getUser().getId(), EntityType.ENTITY_QUESTION, qid));
        } else {
            model.addAttribute("followed", false);
        }

        return "detail";
    }

    @RequestMapping(value = "/addquestionpage", method = {RequestMethod.GET})
    public String addQuestion(Model model) {
        List<Topic> topics= topicService.selectTopicAll();
        List<Topic> topics_parent = topicService.selectTopicParent();
        model.addAttribute("topics",topics);
        model.addAttribute("topics_parent",topics_parent);
        return "addquestion";
    }

    @RequestMapping(value = "/addquestion", method = {RequestMethod.POST})
    public String addQuestionc(@RequestParam("title") String title,
                               @RequestParam("content") String content,
                               @RequestParam("topicName_1") String topicName_1,
                               @RequestParam("topicName_2") String topicName_2,
                               @RequestParam("topicParent") String topicParent,
                               @RequestParam("userId") int userId) {
        Question question = new Question();
        question.setContent(content);
        question.setCreatedDate(new Date());
        question.setTitle(title);
        question.setUserId(userId);
        String topicName ;
        //判断topic是否是新增
        if(topicName_1.equals ("null")){
            topicName = topicName_2;
            if(topicService.selectTopicByName(topicName) == null) {
                Topic topic = new Topic();
                topic.setTopicName(topicName);
                String head = String.format("../img/0%d.jpg", new Random().nextInt(99)+3500);
                topic.setTopicImage(head);
                topic.setTopicDesc("0");
                if(!topicParent.equals("null")){
                    topic.setParentTopic(topicParent);
                }else{
                    topic.setParentTopic("null");
                }
                topic.setFollowedCount(0);
                topicService.insert(topic);
            }
        }else{
            topicName = topicName_1;
        }
        question.setTopicName(topicName);


        if (hostHolder.getUser() == null) {
            question.setUserId(WendaUtil.ANONYMOUS_USERID);
            // return WendaUtil.getJSONString(999);
        }
        questionService.addQuestion(question) ;

        return "redirect:/";

    }
}
