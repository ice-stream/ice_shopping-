package com.ice.service;

import com.alibaba.fastjson.JSONObject;


/*** <p>Title:PermissionService </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
public interface PermissionService {
    /**
     * 查询某用户的 角色  菜单列表   权限列表
     *
     * @param username
     * @return
     */
    JSONObject getUserPermission(String username);
}
