package com.ssm.controller;

import com.ssm.model.*;
import com.ssm.service.*;
import com.ssm.util.WendaUtil;
import com.sun.xml.internal.ws.api.streaming.XMLStreamWriterFactory;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * Created by 10736 on 2017/7/11.
 */
@Controller
public class TopicController {
    @Autowired
    TopicService topicService;

    @Autowired
    QuestionService questionService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    FollowService followService;

    @Autowired
    UserService userService;

    @Autowired
    CommentService commentService;

    @RequestMapping(value ="/mytopic/{index}",method = RequestMethod.GET)
    public String topicpage(Model model,@PathVariable("index") int index){

        int userId = hostHolder.getUser().getId();
        List<Integer> list = followService.getFollowees(userId,EntityType.ENTITY_TOPIC,100);
        List<ViewObject> vos = new ArrayList<ViewObject>();
        int i = 0;
        for(Integer id : list){
            ViewObject vo = new ViewObject();
            Topic topic = topicService.selectTopicById(id);
            vo.set("topic",topic);
            vo.set("index",++i);
            vos.add(vo);
        }
        model.addAttribute("vos",vos);
        if(vos.size()>0) {
            Topic topic_index = (Topic) vos.get(index - 1).get("topic");
            List<Question> questionList = questionService.selectByTopicName(topic_index.getTopicName());
            List<ViewObject> qvos = new ArrayList<ViewObject>();
            for (Question question : questionList) {
                ViewObject vo = new ViewObject();
                vo.set("question", question);
                vo.set("quser", userService.getUser(question.getUserId()));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String s = sdf.format(question.getCreatedDate());
                vo.set("createdDate", s);
                vo.set("qFollowCount", followService.getFollowerCount(EntityType.ENTITY_QUESTION, question.getId()));
                vo.set("qCommentCount", commentService.getCommentCount(EntityType.ENTITY_QUESTION, question.getId()));
                qvos.add(vo);
            }
            model.addAttribute("index", index);
            model.addAttribute("qvos", qvos);
        }

        model.addAttribute("followCount", list.size());
        //查找关注话题排行
        List<Topic> maxList = topicService.selectMaxList();
        model.addAttribute("maxList", maxList);
        return "mytopic";
    }

    @RequestMapping(value ="/usertopic/{userId}/{index}",method = RequestMethod.GET)
    public String usertopicpage(Model model,@PathVariable("userId") int userId,@PathVariable("index") int index){


        List<Integer> list = followService.getFollowees(userId,EntityType.ENTITY_TOPIC,100);
        List<ViewObject> vos = new ArrayList<ViewObject>();
        int i = 0;
        for(Integer id : list){
            ViewObject vo = new ViewObject();
            Topic topic = topicService.selectTopicById(id);
            vo.set("topic",topic);
            vo.set("index",++i);
            vos.add(vo);
        }
        model.addAttribute("vos",vos);
        if(vos.size()>0) {
            Topic topic_index = (Topic) vos.get(index - 1).get("topic");
            List<Question> questionList = questionService.selectByTopicName(topic_index.getTopicName());
            List<ViewObject> qvos = new ArrayList<ViewObject>();
            for (Question question : questionList) {
                ViewObject vo = new ViewObject();
                vo.set("question", question);
                vo.set("quser", userService.getUser(question.getUserId()));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String s = sdf.format(question.getCreatedDate());
                vo.set("createdDate", s);
                vo.set("qFollowCount", followService.getFollowerCount(EntityType.ENTITY_QUESTION, question.getId()));
                vo.set("qCommentCount", commentService.getCommentCount(EntityType.ENTITY_QUESTION, question.getId()));
                qvos.add(vo);
            }
            model.addAttribute("index", index);
            model.addAttribute("qvos", qvos);
        }
        model.addAttribute("topicsuser",userService.getUser(userId));
        model.addAttribute("followCount", list.size());
        //查找关注话题排行
        List<Topic> maxList = topicService.selectMaxList();
        model.addAttribute("maxList", maxList);
        return "usertopic";
    }

    @RequestMapping(value = "/alltopic/{index}",method = RequestMethod.GET)
    public String alltopicpage(Model model, @PathVariable("index") int index){
        List<Topic> parentList = topicService.selectTopicParent();
        int count = parentList.size();
        List<ViewObject> vos = new ArrayList<ViewObject>();
        int i = 0;
        for (Topic topic: parentList){
            ViewObject vo = new ViewObject();
            vo.set("topic",topic);
            vo.set("num",++i);
            vos.add(vo);
        }
        model.addAttribute("count",count);
        model.addAttribute("vos",vos);
        model.addAttribute("index",index);
        Topic topic = parentList.get(index-1);
        List<Topic> topicsList = topicService.selectTopicByParentName(topic.getTopicName());
        List<ViewObject> vos_1 = new ArrayList<ViewObject>();
        ViewObject vo1 = new ViewObject();
        vo1.set("topic_1",topic);
        vo1.set("num_1",1);
        vos_1.add(vo1);
        int j = 0;
        for (Topic topic_1: topicsList){
            ViewObject vo = new ViewObject();
            vo.set("topic_1",topic_1);
            i++;
            if(i%2 == 1)
                vo.set("num_1",1);
            else
                vo.set("num_1",0);
            vos_1.add(vo);
        }
        model.addAttribute("vos_1",vos_1);
        List<Topic> maxList = topicService.selectMaxList();
        model.addAttribute("maxList",maxList);
        return "alltopic";
    }

        @RequestMapping(value= "/topic/{id}",method = {RequestMethod.POST,RequestMethod.GET})
        public String topicdetail(Model model,@PathVariable("id") int id){
            Topic topic = topicService.selectTopicById(id);
            model.addAttribute("topic",topic);
            List<Question> list = questionService.selectByTopicName(topic.getTopicName());
            List<ViewObject> qvos = new ArrayList<ViewObject>();
            //获取关注用户
            List<ViewObject> followUsers = new ArrayList<ViewObject>();
            List<Integer> users = followService.getFollowers(EntityType.ENTITY_TOPIC, id, 20);
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
            //获取相关问题
            for(Question question : list){
                ViewObject vo = new ViewObject();
                vo.set("question",question);
                vo.set("quser",userService.getUser(question.getUserId()));
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                String s = sdf.format(question.getCreatedDate());
                vo.set("createdDate",s);
                vo.set("qFollowCount",followService.getFollowerCount(EntityType.ENTITY_QUESTION,question.getId()));
                vo.set("qCommentCount",commentService.getCommentCount(EntityType.ENTITY_QUESTION,question.getId()));
                qvos.add(vo);
            }
            model.addAttribute("qvos",qvos);
            if (hostHolder.getUser() != null) {
                model.addAttribute("followed", followService.isFollower(hostHolder.getUser().getId(), EntityType.ENTITY_TOPIC, id));
            } else {
                model.addAttribute("followed", false);
            }
            model.addAttribute("followCount",followService.getFollowerCount(EntityType.ENTITY_TOPIC,id));
            return "topicdetail";

        }

}
