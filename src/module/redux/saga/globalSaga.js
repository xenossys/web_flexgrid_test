import { takeEvery } from 'redux-saga/effects'
import { apiList } from '../apiRedux/reducers';
import { loadSaga } from '../apiRedux/saga'

function* globalSaga() {
    for(var i = 0; i < apiList.length; i ++){
        yield takeEvery(apiList[i].apiVal, loadSaga);
    }
}
export default globalSaga;
