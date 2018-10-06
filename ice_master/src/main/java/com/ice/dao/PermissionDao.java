package com.ice.dao;



import java.util.Set;

import com.alibaba.fastjson.JSONObject;


/*** <p>Title:PermissionDao </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
public interface PermissionDao {
   
	 /**
     * 查询用户的角色 菜单 权限
     *
     * @param username
     * @return
     */
    JSONObject getUserPermission(String username);

    /**
     * 查询所有的菜单
     *
     * @return
     */
    Set<String> getAllMenu();

    /**
     * 查询所有的权限
     *
     * @return
     */
    Set<String> getAllPermission();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
