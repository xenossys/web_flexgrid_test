import { initState, actionCreater } from '../helper/utils';
import { handleActions } from 'redux-actions';

export const requestItems = [
  {
    apiVal: 'api/query/pagingtx?transactionList',
    type: 'post',
  },
  {
    apiVal: 'api/query/selecttodaytx?todayTx',
    type: 'post',
  },
  {
    apiVal: 'api/query/SELECTDAYSINFO?todayInfo',
    type: 'post',
  },
  {
    apiVal: 'api/query/gettransaction?txDetail',
    type: 'post',
  },
];

const state = initState(requestItems);
const createdReducer = actionCreater(requestItems);
const resetTxdetail = {
  isLoading: false,
  data: [],
  err: undefined,
  isCompleted: false,
  params: undefined,
};

// reducer 추가하기

createdReducer.RESET_TEST = (state, action) => {
  // api호출이 아닌 다른 종류의 action이 필요한 경우 다음과 같이 추가
  return { ...state, txDetail: resetTxdetail };
};

export const reducer = handleActions(createdReducer, state);
