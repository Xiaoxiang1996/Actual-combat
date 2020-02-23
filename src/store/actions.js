import {getSearchList,getSlideList,getIndexDataList,getSortList,getSortData,getWorthyNav} from '../api/index';
import {SAVE_SEARCHLIST,SAVE_HORIZONTAL,SAVE_INDEXDATA,SAVE_LIST,SAVE_DATA,SAVE_WORTHYNAV} from './mutations-type';
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
  },
  async getList({commit}){
    let result = await getSortList()
        commit(SAVE_LIST,result)
  },
  async getData({commit}){
    let result = await getSortData()
        commit(SAVE_DATA,result)
  },
  async getWorthNavData({commit}){
    let result = await getWorthyNav();
     commit(SAVE_WORTHYNAV,result.data.data);
     console.log(result)
  }
}