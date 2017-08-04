package com.ssm.dao;

/**
 * Created by 10736 on 2017/7/10.
 */
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ssm.model.Topic;

public interface TopicDAO {

    Topic selectTopicByTopicName(@Param("topicName") String topicName);

    Topic selectTopicByTopicId(@Param("id") int id);

    Integer insertTopic(@Param("topic") Topic topic);

    List<Topic> SelectTopicAll();

    List<Topic> SelectTopicParent();

    List<Topic> SelectTopicByParentName(@Param("name") String name);

    void updateFollowCount(@Param("topicId") int topicId,@Param("followCount") long followCount);

    List<Topic> selectMaxList();

}
