// import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'


export function setVisitPage(visitedPage) {
    return dispatch => {
        dispatch({
            type: 'SET_VISIT_PAGE',
            visitedPage
        })
    }

}

// export function setModalUserOptionsState(isModalOpen) {
//     return dispatch => {
//         dispatch({
//             type: 'SET_IS_MODAL_OPEN',
//             isModalOpen
//         })
//     }

// }