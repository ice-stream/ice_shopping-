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
import com.ice.util.CommonUtil;

@RestController
@RequestMapping("/article")
public class ArticleController {

	 @Autowired
	    private ArticleService articleService;

	    /**
	     * 查询文章列表
	     *
	     * @param request
	     * @return
	     */
	    @RequiresPermissions("article:list")
	    @GetMapping("/listArticle")
	    public JSONObject listArticle(HttpServletRequest request) {
	        return articleService.listArticle(CommonUtil.request2Json(request));
	    }

	    /**
	     * 新增文章
	     *
	     * @param requestJson
	     * @return
	     */
	    @RequiresPermissions("article:add")
	    @PostMapping("/addArticle")
	    public JSONObject addArticle(@RequestBody JSONObject requestJson) {
	        CommonUtil.hasAllRequired(requestJson, "content");
	        return articleService.addArticle(requestJson);
	    }

	    /**
	     * 修改文章
	     *
	     * @param requestJson
	     * @return
	     */
	    @RequiresPermissions("article:update")
	    @PostMapping("/updateArticle")
	    public JSONObject updateArticle(@RequestBody JSONObject requestJson) {
	        CommonUtil.hasAllRequired(requestJson, "Attendance,content");
	        return articleService.updateArticle(requestJson);
	    }
	
	
	
	
	
   
}
