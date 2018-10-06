package com.ice.dao;



import java.util.List;

import com.alibaba.fastjson.JSONObject;


public interface AttendanceDao {
	
	/**
     * 新增考勤
     *
     * @param jsonObject
     * @return
     */
    int addAttendance(JSONObject jsonObject);

    /**
     * 统计考勤
     *
     * @param jsonObject
     * @return
     */
    int countAttendance(JSONObject jsonObject);

    /**
     * 考勤列表
     *
     * @param jsonObject
     * @return
     */
    List<JSONObject> listAttendance(JSONObject jsonObject);

    /**
     * 更新考勤
     *
     * @param jsonObject
     * @return
     */
    int updateAttendance(JSONObject jsonObject);
	
	
	
    
    /*查询所用*/
	
    List<JSONObject> listMyAttendance(JSONObject jsonObject);

	int countMyAttendance(JSONObject jsonObject);

	int daelAttendance(JSONObject jsonObject);
	
	
	
   
}
