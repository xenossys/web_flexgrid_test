/**
 *
 * Reducer 폴더 추가후
 * import * as example from './exampleReducer'
 * 위 형식으로 import
 * import 이후에 apiReducers object에 선언해주면 된다.
 * ex) const apiReducers = {
 *  example
 * }
 *
 */

import * as block from './blockReducer';
import * as transaction from './transactionReducer';
import * as user from './userReducer';
import { convertApiReducer, convertApiList } from '../helper/utils';

const apiReducers = {
  block,
  transaction,
  user,
};

const apiReducersList = convertApiReducer(apiReducers);
const apiList = convertApiList(apiReducers);

export { apiReducersList, apiList };
