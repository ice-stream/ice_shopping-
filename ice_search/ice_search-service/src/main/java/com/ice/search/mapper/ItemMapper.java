package com.ice.search.mapper;

import java.util.List;

import com.ice.common.pojo.SearchItem;

public interface ItemMapper {
 
	List<SearchItem> getItemList();

	SearchItem getItemById(Long itemId);
	
}
