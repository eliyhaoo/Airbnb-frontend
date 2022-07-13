const initialState = {
  visitedPage: 'home-page',
  // isModalUserOptionsOpen: false

};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_VISIT_PAGE':
      return { ...state, visitedPage: action.visitedPage }
    // case 'SET_IS_MODAL_OPEN':
    //   return { ...state, isModalUserOptionsOpen: action.isModalUserOptionsOpen }

    default: return state
  }
}
