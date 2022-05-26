// import { userService } from '../services/user.service.js'


const initialState = {
    stays: [],
    stay: null
}
export function stayReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_STAYS':
            return newState = { ...state, stays: action.stays }
        case 'SET_STAY':
            return newState = { ...state, stay: action.stay }

        default:
    }
    // For debug:
    // window.userState = newState;
    console.log('State:', newState);
    return newState;

}
