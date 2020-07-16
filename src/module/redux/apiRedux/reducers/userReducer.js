import { initState, actionCreater } from '../helper/utils';
import { handleActions } from 'redux-actions';

export const requestItems = [
  {
    apiVal: 'api/query/selectalluser?userList',
    type: 'post',
  },
  {
    apiVal: 'api/query/selectusertx?userDetail',
    type: 'post',
  },
];
const state = initState(requestItems);
const createdReducer = actionCreater(requestItems);
export const reducer = handleActions(createdReducer, state);
