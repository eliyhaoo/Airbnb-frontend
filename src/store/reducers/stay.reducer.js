
const initialState = {
    stays: [],
    stay: null,
    filterBy: {
        searchBy: {
            location: '',
            dates: '',
            guestsNum: null,
        },
        category: '',
        properties: {
            price: null,
            beds: '',
            roomType: {
                'Entire place': false,
                'Private room': false,
                'Shared room': false
            },
            amenities: {
                'Wifi': false,  
                'Kitchen': false,
                'Heating': false,
                'Breakfast': false,
                'Pool': false,
                'TV': false,
                'Air conditioning': false,
                'Private entrance': false,
            }
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
            return newState
        default:
    }
    return newState;
}
