package com.ice.service;

import com.alibaba.fastjson.JSONObject;


/*** <p>Title:LoginService </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
public interface LoginService {
    /**
     * 登录表单提交
     *
     * @param jsonObject
     * @return
     */
    JSONObject authLogin(JSONObject jsonObject);

    /**
     * 根据用户名和密码查询对应的用户
     *
     * @param username 用户名
     * @param password 密码
     * @return
     */
    JSONObject getUser(String username, String password);

    /**
     * 查询当前登录用户的权限等信息
     *
     * @return
     */
    JSONObject getInfo();

    /**
     * 退出登录
     *
     * @return
     */
    JSONObject logout();
}
