package com.ice.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.ice.service.ArticleService;
import com.ice.service.AttendanceService;
import com.ice.util.CommonUtil;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {


	 @Autowired
	    private AttendanceService attendanceService;

	    /**
	     * 查询文章列表
	     *
	     * @param request
	     * @return
	     */
	    @RequiresPermissions("attendance:list")
	    @PostMapping("/listAttendance")
	    public JSONObject listAttendance(HttpServletRequest request) {
	     	System.out.println(request);
	        return attendanceService.listAttendance(CommonUtil.request2Json(request));
	    }

	    /**
	     * 新增文章
	     *
	     * @param requestJson
	     * @return
	     */
	    @RequiresPermissions("attendance:add")
	    @PostMapping("/addAttendance")
	    public JSONObject addAttendance(@RequestBody JSONObject requestJson) {
	    	
	        CommonUtil.hasAllRequired(requestJson, "userName,startDate,endDate,remark,value");
	        
	        System.out.println(requestJson);
	        return attendanceService.addAttendance(requestJson);
	    }

	    /**
	     * 修改文章
	     *
	     * @param requestJson
	     * @return
	     */
	    @RequiresPermissions("attendance:update")
	    @PostMapping("/updateAttendance")
	    public JSONObject updateAttendance(@RequestBody JSONObject requestJson) {
	   
	        CommonUtil.hasAllRequired(requestJson, "id,userName,startDate,endDate,remark");
	        return attendanceService.updateAttendance(requestJson);
	    }
	
	
	
	    
	    @RequiresPermissions("attendance:myList")
	    @PostMapping("/listMyAttendance")
	    public JSONObject listMyAttendance(HttpServletRequest request) {
	        return  attendanceService.listMyAttendance(CommonUtil.request2Json(request));
	    }

	    
	    @RequiresPermissions("attendance:update")
	    @PostMapping("/dealAttendance")
	    public JSONObject dealArticle(@RequestBody JSONObject requestJson) {
	   
	        CommonUtil.hasAllRequired(requestJson, "id,userName,value");
	        return attendanceService.dealAttendance(requestJson);
	    }
	
	    
	    
	
	
	
	
	
	
	
	
}
