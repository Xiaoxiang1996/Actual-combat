import {SAVE_SEARCHLIST,SAVE_HORIZONTAL} from './mutations-type'
export default{
  [SAVE_SEARCHLIST](state,searchItem){
      state.searchList = searchItem
  },
  [SAVE_HORIZONTAL](state,slideList){
    state.slideList = slideList
  },
}