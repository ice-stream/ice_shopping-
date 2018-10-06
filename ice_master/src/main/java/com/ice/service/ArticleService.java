package com.ice.service;

import com.alibaba.fastjson.JSONObject;


/*** <p>Title:ArticleService </p>
* <p>Description: </p>
* <p>Company:悦航合展 </p> 
* @author:Alan
* @date:2018年6月11日
 */
public interface ArticleService {
    /**
     * 新增文章
     *
     * @param jsonObject
     * @return
     */
    JSONObject addArticle(JSONObject jsonObject);

    /**
     * 文章列表
     *
     * @param jsonObject
     * @return
     */
    JSONObject listArticle(JSONObject jsonObject);

    /**
     * 更新文章
     *
     * @param jsonObject
     * @return
     */
    JSONObject updateArticle(JSONObject jsonObject);
}
