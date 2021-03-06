import ajax from './ajax';

//点击搜索商品
export const getSearchList = ()=>ajax({
  url:'/searchList',
  method:'GET'
})
export const getSlideList = ()=>ajax({
  url:'/indexCateModule',
  method:'GET'
})
export const getIndexDataList = ()=>ajax({
  url:'/indexList'
})
export const getSortList = ()=>ajax({ //分类导航数据
  url: '/cateNavDatas',
})
export const getSortData = ()=>ajax({ //分类页面数据
  url: '/cateLists',
})
export const getWorthyNav = () =>ajax({
  url:'/worthnav'
})
export const getWorthyList = () =>ajax({
  url:'/worthlist'
})