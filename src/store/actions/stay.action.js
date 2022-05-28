// import { userService } from "../services/user.service.js";
// import { showErrorMsg } from '../services/event-bus.service.js'
import { stayService } from '../../services/stay.service.js'


export function loadStays() {
    return async dispatch => {
        try {
            const stays = await stayService.query()
            dispatch({
                type: 'SET_STAYS',
                stays
            })

        } catch (err) {
            console.log('UserActions: err in loadUsers', err)
            // } finally {
            //     dispatch({ type: 'LOADING_DONE' })
        }
    }
}

export function setStayInStore(stay) {
    return dispatch => {

        dispatch({
            type: 'SET_STAY',
            stay
        })

    }
}

export function saveStay(stay) {
    const actionType = stay._id ? 'UPDATE_STAY' : 'ADD_STAY'
    return dispatch => {
        dispatch({
            type: actionType,
            stay
        })
    }
}




// export function removeUser(userId) {
//     return async dispatch => {
//         try {
//             await userService.remove(userId)
//             dispatch({ type: 'REMOVE_USER', userId })
//         } catch (err) {
//             console.log('UserActions: err in removeUser', err)
//         }
//     }
// }

// export function onLogin(credentials) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.login(credentials)
//             dispatch({
//                 type: 'SET_USER',
//                 user
//             })
//         } catch (err) {
//             showErrorMsg('Cannot login')
//             console.log('Cannot login', err)
//         }
//     }
// }


// export function onSignup(credentials) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.signup(credentials)
//             dispatch({
//                 type: 'SET_USER',
//                 user
//             })
//         } catch (err) {
//             showErrorMsg('Cannot signup')
//             console.log('Cannot signup', err)
//         }

//     }
// }

// export function onLogout() {
//     return async (dispatch) => {
//         try {
//             await userService.logout()
//             dispatch({
//                 type: 'SET_USER',
//                 user: null
//             })
//         } catch (err) {
//             showErrorMsg('Cannot logout')
//             console.log('Cannot logout', err)
//         }
//     }
// }

// export function loadUser(userId) {
//     return async (dispatch) => {
//         try {
//             const user = await userService.getById(userId);
//             dispatch({ type: 'SET_WATCHED_USER', user })
//         } catch (err) {
//             showErrorMsg('Cannot load user')
//             console.log('Cannot load user', err)
//         }
//     }
// }

