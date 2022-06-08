// import { userService } from "../services/user.service.js";
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'
import { stayService } from '../../services/stay.service.js'

export function loadStays() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().stayModule
        const filterByToQuery = JSON.parse(JSON.stringify(filterBy))
        if(filterBy.searchBy.location === 'Im flexible'){
            filterByToQuery.searchBy.location = ''
        }
        try {
            const stays = await stayService.query(filterByToQuery)
            dispatch({
                type: 'SET_STAYS',
                stays
            })

        } catch (err) {
            console.log('StayActions: err in loadStays', err)
            showErrorMsg('Cannot load stays')

        }
    }
}

export function saveStay(stay) {
    const actionType = stay._id ? 'UPDATE_STAY' : 'ADD_STAY'
    return async dispatch => {
        try {
            await stayService.save(stay)
            dispatch({
                type: actionType,
                stay

            })
            showSuccessMsg('Stay saved')

        } catch (err) {
            console.log('StayActions: err in saveStay', err)
            showErrorMsg('Cannot save stay')

        }
    }
}

export function setStay(stay) {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'SET_STAY',
                stay
            })
        } catch (err) {
            console.log('StayActions : err in setStay', err)
        }
    }
}

export function setFilterBy(field, value) {
    return  dispatch => {
        try {
            dispatch({
                type: 'SET_FILTERBY',
                filterField: { field, value }
            })

        } catch (err) {
            console.log('StayActions: err in setFilterBy', err)

        }
    }
}







