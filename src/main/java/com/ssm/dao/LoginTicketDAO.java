package com.ssm.dao;

import com.ssm.model.LoginTicket;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

/**
 * Created by nowcoder on 2016/7/2.
 */

public interface LoginTicketDAO {
    String TABLE_NAME = "login_ticket";
    String INSERT_FIELDS = " user_id, expired, status, ticket ";
    String SELECT_FIELDS = " id, " + INSERT_FIELDS;


    int addTicket(@Param("ticket") LoginTicket ticket);

    LoginTicket selectByTicket(@Param("ticket") String ticket);

    void updateStatus(@Param("ticket") String ticket, @Param("status") int status);
}
