import {SAVE_SEARCHLIST,SAVE_HORIZONTAL,SAVE_INDEXDATA} from './mutations-type'
export default{
  [SAVE_SEARCHLIST](state,searchItem){
      state.searchList = searchItem
  },
  [SAVE_HORIZONTAL](state,slideList){
    state.slideList = slideList
  },
  [SAVE_INDEXDATA](state,indexData){
    state.indexData = indexData
  }
}