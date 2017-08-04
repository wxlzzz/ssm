package com.ssm.controller;

import com.ssm.service.UserService;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Created by nowcoder on 2016/7/2.
 */
@Controller
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    UserService userService;

    @RequestMapping(value = "/reg/", method = {RequestMethod.POST,RequestMethod.GET})
    public String reg(Model model, RedirectAttributes attr,@RequestParam("username") String username,
                      @RequestParam("password") String password,
                      @RequestParam(value="rememberme", defaultValue = "false") boolean rememberme,
                      @RequestParam(value = "next", required = false) String next,
                      HttpServletResponse response) {
        try {
            Map<String, Object> map = userService.register(username, password);
            if (map.containsKey("ticket")) {
                Cookie cookie = new Cookie("ticket", map.get("ticket").toString());
                cookie.setPath("/");
                if (rememberme) {
                    cookie.setMaxAge(3600*24*5);
                }
                response.addCookie(cookie);
                if(next != null){
                    return "redirect:"+next;
                }
                return "redirect:/";
            } else {
                attr.addFlashAttribute("msg", map.get("msg"));
                return "redirect:/sign_up";
            }

        } catch (Exception e) {
            logger.error("注册异常" + e.getMessage());
            attr.addFlashAttribute("msg", "服务器异常");
            return "redirect:/sign_up";
        }
    }

    @RequestMapping(value = "/sign_in", method = {RequestMethod.GET})
    public String sign_in(Model model, @RequestParam(value = "next", required = false) String next) {
        model.addAttribute("next", next);
        return "sign-in";
    }

    @RequestMapping(value = "/sign_up", method = {RequestMethod.GET})
    public String regloginPage(Model model, @RequestParam(value = "next", required = false) String next) {
        model.addAttribute("next", next);
        return "sign-up";
    }

    @RequestMapping(value = "/login/", method = {RequestMethod.POST,RequestMethod.GET})
    public String login(Model model, RedirectAttributes attr, @RequestParam("username") String username,
                        @RequestParam("password") String password,
                        @RequestParam(value="rememberme", defaultValue = "false") boolean rememberme,
                        @RequestParam(value = "next", required = false) String next,
                        HttpServletResponse response) {
        try {
            Map<String, Object> map = userService.login(username, password);
            if (map.containsKey("ticket")) {
                Cookie cookie = new Cookie("ticket", map.get("ticket").toString());
                cookie.setPath("/");
                if (rememberme) {
                    cookie.setMaxAge(3600*24*5);
                }
                response.addCookie(cookie);
                if(next != null){
                    return "redirect:"+next;
                }
                return "redirect:/";
            } else {
                attr.addFlashAttribute("msg", map.get("msg"));
                return "redirect:/sign_in";
            }

        } catch (Exception e) {
            logger.error("登陆异常" + e.getMessage());
            return "redirect:/sign_in";
        }
    }

    @RequestMapping(value = "/logout", method = {RequestMethod.GET, RequestMethod.POST})
    public String logout(@CookieValue("ticket") String ticket) {
        userService.logout(ticket);
        return "redirect:/";
    }

}
