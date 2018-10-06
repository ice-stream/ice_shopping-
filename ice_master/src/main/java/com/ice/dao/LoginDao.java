package com.ice.dao;

import org.apache.ibatis.annotations.Param;

import com.alibaba.fastjson.JSONObject;

/*** <p>Title:LoginDao </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
public interface LoginDao {
  
	 /**
     * 根据用户名和密码查询对应的用户
     *
     * @param username 用户名
     * @param password 密码
     * @return
     */
    JSONObject getUser(@Param("username") String username, @Param("password") String password);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
