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