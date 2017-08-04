package com.ssm.async.handler;

import com.ssm.async.EventHandler;
import com.ssm.async.EventModel;
import com.ssm.async.EventType;
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
public class LikeHandler implements EventHandler {
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
        message.setContent("用户" + user.getName()
                + "赞了你的评论,<a href = '/question/"+model.getExt("questionId")+"'>"+"查看该问题"+"</a>");

        messageService.addMessage(message);
    }

    @Override
    public List<EventType> getSupportEventTypes() {
        return Arrays.asList(EventType.LIKE);
    }
}
