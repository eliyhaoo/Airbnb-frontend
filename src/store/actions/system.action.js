// import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'


export function setIsInHomePage(isInHomePage) {
    return dispatch => {
        dispatch({
            type: 'SET_VISIT_HOME_PAGE',
            isInHomePage
        })
    }

}
