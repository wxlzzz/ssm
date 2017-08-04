package com.ssm.dao;

import com.ssm.model.User;
import org.apache.ibatis.annotations.*;

/**
 * Created by nowcoder on 2016/7/2.
 */

public interface UserDAO {
    // 注意空格
    String TABLE_NAME = " user ";
    String INSERT_FIELDS = " name, password, salt, head_url ";
    String SELECT_FIELDS = " id, " + INSERT_FIELDS;


    int addUser(@Param("user") User user);


    User selectById(@Param("id") int id);


    User selectByName(@Param("name") String name);


    void updatePassword(@Param("user") User user);


    void deleteById(@Param("id") int id);
}
