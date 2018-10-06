package com.ice.content.service.impl;

import java.util.Date;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ice.common.jedis.JedisClient;
import com.ice.common.utils.E3Result;
import com.ice.common.utils.JsonUtils;
import com.ice.content.service.ContentService;
import com.ice.mapper.TbContentMapper;
import com.ice.pojo.TbContent;
import com.ice.pojo.TbContentExample;
import com.ice.pojo.TbContentExample.Criteria;



/**
 * 内容管理Service
 * <p>Title: ContentServiceImpl</p>
 * <p>Description: </p>
 * <p>Company: www.itcast.cn</p> 
 * @version 1.0
 */
@Service
public class ContentServiceImpl implements ContentService {

	
	@Autowired
	private JedisClient jedisClient;
	
	@Value("${CONTENT_LIST}")
	private  String CONTENT_LIST;
	
	
	@Autowired
	private TbContentMapper contentMapper;

	@Override
	public E3Result addContent(TbContent content) {
		//将内容数据插入到内容表
				content.setCreated(new Date());
				content.setUpdated(new Date());
				//插入到数据库
				contentMapper.insert(content);
				//缓存同步,删除缓存中对应的数据。
				jedisClient.hdel(CONTENT_LIST, content.getCategoryId().toString());
				return E3Result.ok();
	}

	@Override
	public List<TbContent> getContentListByCid(long cid) {
		//查询缓存
		String json=jedisClient.hget(CONTENT_LIST, cid+"");
		if(StringUtils.isNotBlank(json)) {
			List<TbContent> list=JsonUtils.jsonToList(json, TbContent.class);
		}
		
		
		TbContentExample example = new TbContentExample();
		Criteria criteria = example.createCriteria();
		//设置查询条件
		criteria.andCategoryIdEqualTo(cid);
		//执行查询
		List<TbContent> list = contentMapper.selectByExampleWithBLOBs(example);
		try {
			
		    jedisClient.hset(CONTENT_LIST, cid+"", JsonUtils.objectToJson(list));
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	

}
