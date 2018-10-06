package com.ice.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.fastjson.JSONObject;
import com.ice.dao.AttendanceDao;
import com.ice.service.AttendanceService;
import com.ice.util.CommonUtil;

@Service
public class AttendanceServiceImpl implements AttendanceService{

	@Autowired
	private AttendanceDao attendanceDao;
	
	
	
	
	@Override
	@Transactional(rollbackFor = Exception.class)
	public JSONObject addAttendance(JSONObject jsonObject) {
		  int checkState=0;
		  CommonUtil.hasAllRequired(jsonObject, "checkState");
		attendanceDao.addAttendance(jsonObject);
	      return CommonUtil.successJson();
	}

	@Override
	public JSONObject listAttendance(JSONObject jsonObject) {
		 CommonUtil.fillPageParam(jsonObject);
	       int count = attendanceDao.countAttendance(jsonObject);
	        List<JSONObject> list = attendanceDao.listAttendance(jsonObject);
	        return CommonUtil.successPage(jsonObject, list, count);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public JSONObject updateAttendance(JSONObject jsonObject) {
		attendanceDao.updateAttendance(jsonObject);
        return CommonUtil.successJson();
	}

	@Override
	public JSONObject listMyAttendance(JSONObject jsonObject) {
		CommonUtil.fillPageParam(jsonObject);
	       int count = attendanceDao.countMyAttendance(jsonObject);
	        List<JSONObject> list = attendanceDao.listMyAttendance(jsonObject);
	        return CommonUtil.successPage(jsonObject, list, count);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public JSONObject dealAttendance(JSONObject jsonObject) {
		// TODO Auto-generated method stub
		int checkState=1;
		 Date date = new Date();//获得系统时间.
	      SimpleDateFormat sdf =   new SimpleDateFormat( " yyyy-MM-dd HH:mm:ss " );
	      String checkTime = sdf.format(date);
		  CommonUtil.hasAllRequired(jsonObject, "checkState,checkTime");
		  attendanceDao.daelAttendance(jsonObject);
		 return CommonUtil.successJson();
	}

	
	
	
	
	
	
	
	
	
	
	
	
}
