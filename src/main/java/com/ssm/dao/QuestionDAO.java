package com.ssm.dao;

import com.ssm.model.Question;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by nowcoder on 2016/7/2.
 */

public interface QuestionDAO {
    String TABLE_NAME = " question ";
    String INSERT_FIELDS = " title, content, created_date, user_id, comment_count, topicName ";
    String SELECT_FIELDS = " id, " + INSERT_FIELDS;


    int addQuestion(@Param("question") Question question);


    List<Question> selectLatestQuestions(@Param("userId") int userId, @Param("offset") int offset,
                                         @Param("limit") int limit);

    List<Question> selectByCommentCount(@Param("offset") int offset,@Param("limit") int limit);

    Question getById(@Param("id") int id);

    int updateCommentCount(@Param("id") int id, @Param("commentCount") int commentCount);

    List<Question> selectByTopicName(@Param("topicName") String topicName);

}
