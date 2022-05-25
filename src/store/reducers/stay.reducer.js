// import { userService } from '../services/user.service.js'


const initialState = {
    stays: []
}
export function stayReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_STAYS':
           newState = {...state,stays:action.stays}
        
            break;
        default:
    }
    // For debug:
    // window.userState = newState;
    // console.log('State:', newState);
    return newState;

}
