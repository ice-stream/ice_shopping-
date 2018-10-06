package com.ice.service;

import com.ice.common.pojo.EasyUIDataGridResult;
import com.ice.common.utils.E3Result;
import com.ice.pojo.TbItem;
import com.ice.pojo.TbItemDesc;

public interface ItemService {

	TbItem getItemById(Long itemId);

	EasyUIDataGridResult getItemList(Integer page, Integer rows);

	E3Result addItem(TbItem item, String desc);
	TbItemDesc getItemDescById(long itemId);
    


}
