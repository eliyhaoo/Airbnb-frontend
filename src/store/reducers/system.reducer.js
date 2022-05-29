const initialState = {
  // isLoading: false
  visitedPage:'home-page'
};

export function systemReducer (state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_VISIT_PAGE':
      return { ...state, visitedPage:action.visitedPage }
    // case 'LOADING_START':
    //   return { ...state, isLoading: true }
    // case 'LOADING_DONE':
    //   return { ...state, isLoading: false }
    default: return state
  }
}
