import { userService } from "../../services/user.service.js"
import { showErrorMsg } from "../../services/event-bus.service.js"
import { storageService } from '../../services/async-storage.service'

export function onLogin(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
            // socketService.login(user.id)

        } catch (err) {
            // showErrorMsg('Invalid username or password')
            console.log('Cannot login', err)
            throw err
        }
    }
}

export function logOut() {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })

        } catch (err) {
            showErrorMsg('Cannot logout')
            console.log('Cannot logout', err)
        }
    }
}

export function onSignup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            showErrorMsg('Cannot signup')
            console.log('Cannot signup', err)
        }

    }
}

export function loadUser() {
    return async dispatch => {
        try {
            const user = await userService.getLoggedinUser()
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('UserAction: err in loadUser', err)
            // } finally {
            //     dispatch({ type: 'LOADING_DONE' })
            // }
        }
    }
}

export function updateUser(user) {

    return async dispatch => {
        try {
            // const user = await userService.getLoggedinUser()
            user = userService.update(user)
            dispatch({ type: 'UPDATE_USER', user })
        } catch (err) {
            console.log('UserAction: err in update user', err)
            // } finally {
            //     dispatch({ type: 'LOADING_DONE' })
            // }
        }
    }
}