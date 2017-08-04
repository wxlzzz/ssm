package com.ssm.async.handler;

import com.ssm.async.EventHandler;
import com.ssm.async.EventModel;
import com.ssm.async.EventType;
import com.ssm.model.EntityType;
import com.ssm.model.Message;
import com.ssm.model.User;
import com.ssm.service.MessageService;
import com.ssm.service.UserService;
import com.ssm.util.WendaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by nowcoder on 2016/7/30.
 */
@Component
public class UnFollowHandler implements EventHandler {
    @Autowired
    MessageService messageService;

    @Autowired
    UserService userService;

    @Override
    public void doHandle(EventModel model) {
        Message message = new Message();
        message.setFromId(WendaUtil.SYSTEM_USERID);
        message.setToId(model.getEntityOwnerId());
        message.setCreatedDate(new Date());
        User user = userService.getUser(model.getActorId());
        int userId = model.getActorId();
        if (model.getEntityType() == EntityType.ENTITY_QUESTION) {
            message.setContent("用户" +user.getName()
                    + "取消关注了你的问题,<a href = '/user/"+userId+"'>"+"查看该用户"+"</a>" );
        } else if (model.getEntityType() == EntityType.ENTITY_USER) {
            message.setContent("用户" + user.getName()
                    + "取消关注了你,<a href = '/user/"+userId+"'>"+"查看该用户"+"</a>");
        }

        messageService.addMessage(message);
    }

    @Override
    public List<EventType> getSupportEventTypes() {
        return Arrays.asList(EventType.FOLLOW);
    }
}
