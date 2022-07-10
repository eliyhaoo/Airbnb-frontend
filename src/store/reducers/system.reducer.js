const initialState = {
  visitedPage: 'home-page',
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_VISIT_PAGE':
      return { ...state, visitedPage: action.visitedPage }
    default: return state
  }
}
