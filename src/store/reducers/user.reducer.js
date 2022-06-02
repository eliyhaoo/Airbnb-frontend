import { userService } from '../../services/user.service'


let initialState = {
    // user: userService.getLoggedinUser() || {}
    user: null
}
export function userReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break;
        default:
    }
    return newState;

}
