// import { userService } from "../services/user.service.js";
// import { showSuccessMsg,showErrorMsg } from '../services/event-bus.service.js'
import { stayService } from '../../services/stay.service.js'


export function updateReserve(field, value) {
    return dispatch => {

        dispatch({
            type: 'UPDATE_RESERVE',
            reserveField: { field, value }
        })
    }
}
