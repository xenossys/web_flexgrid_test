
import { combineReducers } from 'redux';
import { apiReducersList } from '../apiRedux/reducers';
// import { authReducer } from './authReducer';



const rootReducer = combineReducers({
    ...apiReducersList,
    // auth : authReducer
  });

export default rootReducer;

