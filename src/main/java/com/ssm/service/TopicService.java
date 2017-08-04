package com.ssm.service;


import com.ssm.dao.TopicDAO;
import com.ssm.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class TopicService {
	@Autowired
	TopicDAO topicDAO;

	public int insert(Topic topic){
		return topicDAO.insertTopic(topic);
	}

	public Topic selectTopicByName(String topicName){
		return topicDAO.selectTopicByTopicName(topicName);
	}

	public List<Topic> selectTopicAll(){
		return topicDAO.SelectTopicAll();
	}

	public List<Topic> selectTopicParent(){
		return topicDAO.SelectTopicParent();
	}

	public List<Topic> selectTopicByParentName(String name){
		return topicDAO.SelectTopicByParentName(name);
	}

	public Topic selectTopicById(int id){
		return topicDAO.selectTopicByTopicId(id);
	}

	public void updateFollowCount(int id,long followCount){
		topicDAO.updateFollowCount(id,followCount);
	}

	public List<Topic> selectMaxList(){
		return topicDAO.selectMaxList();
	}
}
