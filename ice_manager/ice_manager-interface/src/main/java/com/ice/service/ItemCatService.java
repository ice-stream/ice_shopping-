package com.ice.service;

import java.util.List;

import com.ice.common.pojo.EasyUITreeNode;

public interface ItemCatService {

	List<EasyUITreeNode> getItemCatlist(Long parentId);

	
	
}
