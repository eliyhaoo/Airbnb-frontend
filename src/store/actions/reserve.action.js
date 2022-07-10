

export function updateReserve(field, value) {
    return dispatch => {

        dispatch({
            type: 'UPDATE_RESERVE',
            reserveField: { field, value }
        })
    }
}
