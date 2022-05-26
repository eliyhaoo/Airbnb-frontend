// import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'


export function setIsInHomePage(isInHomePage) {
    console.log('is IN HOME PAEG',isInHomePage);
    return dispatch => {
            dispatch({
                type:'SET_VISIT_HOME_PAGE',
                isInHomePage
            })
        } 
     
}
