export function load(type, params = {}) {
    return {
      type,
      params
    };
}


export function loadResult(err, values) {
    var { type, result, params, keyString } = values;
    var data = { 
      [ keyString ] : {
        isLoading: false, 
        data: result || [], 
        err: undefined, 
        isCompleted : true,
        params : params
      }
    }
    if (err) {
        data.isErr = err
        return {
            type: type + '_ERROR',
            data
        };
    } else {
        return {
            type: type + '_COMPLETED',
            data
        };
    }
}