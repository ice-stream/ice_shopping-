package com.ice.search.service;

import com.ice.common.pojo.SearchResult;

public interface SearchService {

	 SearchResult search(String keyword,int page,int rows) throws Exception;
	
	
	
}
