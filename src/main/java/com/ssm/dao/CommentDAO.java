package com.ssm.dao;

import com.ssm.model.Comment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

/**
 * Created by nowcoder on 2016/7/9.
 */

public interface CommentDAO {
    String TABLE_NAME = " comment ";
    String INSERT_FIELDS = " user_id, content, created_date, entity_id, entity_type, status ";
    String SELECT_FIELDS = " id, " + INSERT_FIELDS;


    int addComment(@Param("comment") Comment comment);


    int updateStatus(@Param("id") int id, @Param("status") int status);


    List<Comment> selectCommentByEntity(@Param("entityId") int entityId, @Param("entityType") int entityType);


    int getCommentCount(@Param("entityId") int entityId, @Param("entityType") int entityType);

    Comment getCommentById(@Param("id") int id);

    int getUserCommentCount(@Param("userId") int userId);
}
