import { initState, actionCreater } from '../helper/utils';
import { handleActions } from 'redux-actions';

export const requestItems = [
  {
    apiVal: 'api/query/getblockheight?blockHeigh',
    type: 'post',
  },
  {
    apiVal: 'api/query/pagingblock?blockList',
    type: 'post',
  },
  {
    apiVal: 'api/query/getblockinfo?blockDetail',
    type: 'post',
  },
];
const state = initState(requestItems);
const createdReducer = actionCreater(requestItems);
export const reducer = handleActions(createdReducer, state);
