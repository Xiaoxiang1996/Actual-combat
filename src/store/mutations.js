import {SAVE_SEARCHLIST,SAVE_HORIZONTAL,SAVE_INDEXDATA,SAVE_LIST,SAVE_DATA,SAVE_WORTHYNAV} from './mutations-type'
export default{
  [SAVE_SEARCHLIST](state,searchItem){
      state.searchList = searchItem
  },
  [SAVE_HORIZONTAL](state,slideList){
    state.slideList = slideList
  },
  [SAVE_INDEXDATA](state,indexData){
    state.indexData = indexData
  },
  [SAVE_LIST](state,sortList){//分类导航数据
    state.sortList=sortList
  },
  [SAVE_DATA](state,sortdata){//分类页面数据
    state.sortdata=sortdata
  },
  [SAVE_WORTHYNAV](state,worthyNav){
    state.worthyNav = worthyNav
  }
}