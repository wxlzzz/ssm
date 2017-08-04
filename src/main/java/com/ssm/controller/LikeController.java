package com.ssm.controller;

import com.ssm.async.EventModel;
import com.ssm.async.EventProducer;
import com.ssm.async.EventType;
import com.ssm.model.Comment;
import com.ssm.model.EntityType;
import com.ssm.model.HostHolder;
import com.ssm.service.CommentService;
import com.ssm.service.LikeService;
import com.ssm.util.WendaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nowcoder on 2016/7/30.
 */
@Controller
public class LikeController {
    @Autowired
    LikeService likeService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    CommentService commentService;

    @Autowired
    EventProducer eventProducer;

    @RequestMapping(value = "/like", method = {RequestMethod.POST})
    public String like(@RequestParam("commentId") int commentId,@RequestParam("next") String next) {
        Comment comment = commentService.getCommentById(commentId);

        eventProducer.fireEvent(new EventModel(EventType.LIKE)
                .setActorId(hostHolder.getUser().getId()).setEntityId(commentId)
                .setEntityType(EntityType.ENTITY_COMMENT).setEntityOwnerId(comment.getUserId())
                .setExt("questionId", String.valueOf(comment.getEntityId())));
        long likeCount = likeService.like(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, commentId);
        return "redirect:"+next;
    }

    @RequestMapping(value = "/dislike", method = {RequestMethod.POST})
    public String dislike(@RequestParam("commentId") int commentId,@RequestParam("next") String next) {
        long likeCount = likeService.disLike(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, commentId);
        return "redirect:"+next;
    }
}
