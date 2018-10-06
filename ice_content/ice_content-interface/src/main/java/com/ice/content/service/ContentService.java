package com.ice.content.service;

import java.util.List;

import com.ice.common.utils.E3Result;
import com.ice.pojo.TbContent;



public interface ContentService {

	E3Result addContent(TbContent content);
	List<TbContent> getContentListByCid(long cid);
}
