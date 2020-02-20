import {getSearchList,getSlideList,getIndexDataList} from '../api/index';
import {SAVE_SEARCHLIST,SAVE_HORIZONTAL,SAVE_INDEXDATA} from './mutations-type';
export default{
  async getSearchLists({commit}){
    let result = await getSearchList();
    commit(SAVE_SEARCHLIST,result)
  },
  async getSlideList({commit}){
    let result = await getSlideList();
    commit(SAVE_HORIZONTAL,result)
  },
  async getIndexDataList({commit}){
    let result = await getIndexDataList();
    commit(SAVE_INDEXDATA,result)
  }
}