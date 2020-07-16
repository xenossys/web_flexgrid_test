const initialState = {
  auth: {
    isLoading: false,
    data: {
      list: [],
    },
    err: undefined,
    isCompleted: false,
  },
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'test':
    case 'test' + '_COMPLETED':
    case 'test' + '_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
}
