const initialState = {
  // isLoading: false
  isInHomePage:true
};

export function systemReducer (state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_VISIT_HOME_PAGE':
      return { ...state, isInHomePage:action.isInHomePage }
    // case 'LOADING_START':
    //   return { ...state, isLoading: true }
    // case 'LOADING_DONE':
    //   return { ...state, isLoading: false }
    default: return state
  }
}
