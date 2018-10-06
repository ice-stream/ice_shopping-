package com.ice.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.ice.dao.ArticleDao;
import com.ice.service.ArticleService;
import com.ice.util.CommonUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


/*** <p>Title:ArticleServiceImpl </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
@Service
public class ArticleServiceImpl implements ArticleService {


    @Autowired
    private ArticleDao articleDao;
	
/*新增文章*/
	@Override
	@Transactional(rollbackFor = Exception.class)
	public JSONObject addArticle(JSONObject jsonObject) {
		  articleDao.addArticle(jsonObject);
	      return CommonUtil.successJson();
	}

	/*
	 * 文章列表
	 * @see com.ice.service.ArticleService#listArticle(com.alibaba.fastjson.JSONObject)
	 */
	@Override
	public JSONObject listArticle(JSONObject jsonObject) {
	    CommonUtil.fillPageParam(jsonObject);
        int count = articleDao.countArticle(jsonObject);
        List<JSONObject> list = articleDao.listArticle(jsonObject);
        return CommonUtil.successPage(jsonObject, list, count);
	}

	
	/*
	 * 更新文章
	 * @see com.ice.service.ArticleService#updateArticle(com.alibaba.fastjson.JSONObject)
	 */
	@Override
	@Transactional(rollbackFor = Exception.class)
	public JSONObject updateArticle(JSONObject jsonObject) {
	    articleDao.updateArticle(jsonObject);
        return CommonUtil.successJson();
	}

    
}
