package com.ssm.dao;

import com.ssm.model.Message;
import org.apache.ibatis.annotations.Insert;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by nowcoder on 2016/7/9.
 */

public interface MessageDAO {

    int addMessage(@Param("message") Message message);


    List<Message> getConversationDetail(@Param("conversationId") String conversationId,
                                        @Param("offset") int offset, @Param("limit") int limit);


    int getConvesationUnreadCount(@Param("userId") int userId, @Param("conversationId") String conversationId);


    List<Message> getConversationList(@Param("userId") int userId,
                                      @Param("offset") int offset, @Param("limit") int limit);
}
