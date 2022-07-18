

let initialState = {
    user: null,
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = { user: action.user }
            break
        case 'UPDATE_USER_WISHLIST':
            newState = { user: action.user }
            break
        default:
    }
    return newState;

}
