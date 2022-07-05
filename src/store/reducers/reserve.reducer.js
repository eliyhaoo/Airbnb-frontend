
const initialState = {
    reserve: {
        hostId: null,
        buyerId: null,
        stayId: null,
        totalPrice: 0,
        dates: {
            checkIn: null,
            checkOut: null,
        },
        guests: {
            total: 1,
            adults: 1,
            childrens: 0,
            infants: 0
        },
        status: 'pending'
    },

}
export function reserveReducer(state = initialState, action) {

    var newState = state;
    switch (action.type) {

        case 'UPDATE_RESERVE':
            const { field, value } = action.reserveField
            return newState = { ...state, reserve: { ...state.reserve, [field]: value } }

        default:
    }


    return newState;
}
