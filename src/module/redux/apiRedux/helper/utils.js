export const convertApiReducer = apiReducers => {
	const reducers = {};
	for (const key in apiReducers) {
		reducers[key] = apiReducers[key].reducer;
	}
	return reducers;
};

export const convertApiList = apiReducers => {
	// 좀 찝찝함
	const apiList = [];
	for (const key in apiReducers) {
		// console.log(Array.isArray(apiReducers[key].requestItems))
		// apiList.concat(apiReducers[key].requestItems)
		for (
			let i = 0;
			i < apiReducers[key].requestItems.length;
			i++
		) {
			apiList.push(
				apiReducers[key].requestItems[i],
			);
		}
	}
	return apiList;
};

export const initState = requestItems => {
	const state = {};
	for (var i = 0; i < requestItems.length; i++) {
		const devideRequestItems = requestItems[
			i
		].apiVal.split('?');
		state[devideRequestItems[1]] = {
			isLoading: false,
			data: [],
			isErr: false,
			isCompleted: false,
			params: undefined,
		};
	}
	return state;
};

export const getPath = type => {
	if (!type) {
		return;
	}
	var keyString = type.split('?')[1];
	var path = type.split('?')[0];
	return { keyString, path };
};

function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
			}
			const error = data; //(data && data.error) || response.statusText;
			return Promise.reject(error);
		}
		return {
			data,
			headers: response.headers.map,
		};
	});
}

export const request = (url, options) => {
	if (!options) options = {};
	return fetch(url, options).then(handleResponse);
};

export const actionCreater = requestItems => {
	const createdReducer = {};
	for (var i = 0; i < requestItems.length; i++) {
		createdReducer[
			`${requestItems[i].apiVal}_INIT`
		] = (state, action) => {
			return { ...state, ...action.data };
		};
		createdReducer[
			`${requestItems[i].apiVal}_COMPLETED`
		] = (state, action) => {
			return { ...state, ...action.data };
		};
		createdReducer[
			`${requestItems[i].apiVal}_ERROR`
		] = (state, action) => {
			return { ...state, ...action.data };
		};
	}
	return createdReducer;
};
