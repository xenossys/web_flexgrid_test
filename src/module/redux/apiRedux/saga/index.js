import { call, put } from 'redux-saga/effects';
import { loadRequestOption, serverURL } from "../apiOption";
import { loadResult } from "../action";
import { getPath, request } from "../helper/utils";



export function* loadSaga(action) {

    var { type, params } = action;
    var { keyString, path } = getPath(type);
    let requestURL = serverURL + '/' + path;
    let requestOptions = loadRequestOption;
    requestOptions.method = "POST";
    requestOptions.body = JSON.stringify(params);
    var initData = { 
      [ keyString ] : {
        isLoading: true, 
        data: [], 
        err: undefined, 
        isCompleted : false,
        params : undefined 
      }
    }
    yield put({ type : type + '_INIT', data : initData });

    try {
      var result = yield call(request, requestURL, requestOptions);
      if (result && result.data) {
        var _data = result.data;

        yield put(loadResult(undefined, { type, result: _data, params, keyString }));
      }
    } catch (err) {
      yield put(loadResult(err, { type, params, keyString }));
      console.log(err);
      if (err && err.error) {
        console.log(err);
      }
    }
}

