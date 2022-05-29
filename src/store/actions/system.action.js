// import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'


export function setVisitPage(visitedPage) {
    console.log('is IN HOME PAEG',visitedPage);
    return dispatch => {
            dispatch({
                type:'SET_VISIT_PAGE',
                visitedPage
            })
        } 
     
}
