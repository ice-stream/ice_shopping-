package com.ice.content.service;

import java.util.List;

import com.ice.common.pojo.EasyUITreeNode;
import com.ice.common.utils.E3Result;


public interface ContentCategoryService {

	List<EasyUITreeNode> getContentCatList(long parentId);
	E3Result addContentCategory(long parentId, String name);
}
