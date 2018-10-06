package com.ice.service;

import com.alibaba.fastjson.JSONObject;

/*** <p>Title:AttendanceService </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月12日
 */
public interface AttendanceService {

	/**
     * 新增考勤
     *
     * @param jsonObject
     * @return
     */
    JSONObject addAttendance(JSONObject jsonObject);

    /**
     * 考勤列表
     *
     * @param jsonObject
     * @return
     */
    JSONObject listAttendance(JSONObject jsonObject);

    /**
     * 更新考勤
     *
     * @param jsonObject
     * @return
     */
    JSONObject updateAttendance(JSONObject jsonObject);

	JSONObject listMyAttendance(JSONObject jsonObject);

	JSONObject dealAttendance(JSONObject jsonObject);
	
	
	
	
	
	
	
	
	
	
}
