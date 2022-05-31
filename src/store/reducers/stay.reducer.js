// import { userService } from '../services/user.service.js'

const initialState = {
    stays: [],
    stay: null,
    filterBy: {
        searchBy: {
            country: '',
            dates: '',
            guestsNum: null,
        },
        category: 'All Homes',
        properties: {
            price: null,
            bedsNum: null,
            roomType: {
                'Entire place': { isChecked: false, title: 'A place all to yourself' },
                'Private room': { isChecked: false, title: 'Your own room in a home or a hotel, plus some shared common spaces' },
                'Shared room': { isChecked: false, title: 'A sleeping space and common areas that may be shared with others' }
            },
            amenities: []
        }

    },
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
        case 'SET_FILTERBY':
            const { field, value } = action.filterField
            newState = { ...state, filterBy: { ...state.filterBy, [field]: value } }
            // console.log('newState', newState)
            return newState
        default:
    }
    // For debug:
    // window.userState = newState;
    // console.log('State:', newState);
    return newState;
}
