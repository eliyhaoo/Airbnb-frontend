// import { userService } from '../services/user.service.js'


const initialState = {
    stays: [],
    stay: null,
    category: 'All Homes'
}
export function stayReducer(state = initialState, action) {
    var stays
    var newState = state;
    switch (action.type) {
        case 'SET_STAYS':
            return newState = { ...state, stays: action.stays }
        case 'SET_STAY':
            return newState = { ...state, stay: action.stay }
        case 'UPDATE_STAY':
            stays = state.stays.map(stay => stay._id === action.stay._id ? action.stay : stay)
            return newState = { ...state, stays }
        case 'ADD_STAY':
            stays = [...stays, action.stay]
            return newState = { ...state, stays }
        case 'SET_CATEGORY':
            return newState = { ...state, category: action.category }
        // case 'SET_FILTER':
        //     const { field, value } = action.filterField
        //     const newState = { ...state, filterBy: { ...state.filterBy, [field]: value } }
        //     // console.log('newState', newState)
        //     return newState
        default:
    }
    // For debug:
    // window.userState = newState;
    // console.log('State:', newState);
    return newState;

}
