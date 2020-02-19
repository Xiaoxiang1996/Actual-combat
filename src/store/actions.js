import {getSearchList} from '../api/index';
import {SAVE_SEARCHLIST} from './mutations-type';
export default{
  async getSearchLists({commit}){
    let result = await getSearchList();
    commit(SAVE_SEARCHLIST,result)
  }
}