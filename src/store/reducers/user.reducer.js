

let initialState = {
    user: null,
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break
        case 'UPDATE_USER':
            newState = { ...state, user: action.user }
            break
        default:
    }
    return newState;

}
