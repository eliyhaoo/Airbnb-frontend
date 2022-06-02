import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { onLogOut, loadUser } from '../store/actions/user.actions'

import { useEffect } from "react"




export const UserOptions = () => {

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    const { user } = useSelector(storeState => storeState.userModule)
    console.log('user from user options', user)

    const dispatch = useDispatch()

    const onLogOut = (ev) => {
        console.log('haha ELIYAHOOOOO')
        // dispatch(onLogOut)
    }

    const onLogin = (ev) => {
        ev.stopPropagation()
    }

    const onSignup = (ev) => {
        ev.stopPropagation()
    }

    return <section className="user-options flex direction-column">

        <div className="login-options-container" >

            <div onClick={onSignup}>
                <Link to="/signup" >
                    <div >
                        Sign up
                    </div>
                </Link>
            </div>

            <div onClick={onLogin} >
                {!user && <Link to="/login" >
                    <div >
                        Log in
                    </div>
                </Link>}
                {user && <div onClick={onLogOut}> Log out</div>}
            </div>

        </div>

        <div className="host-options-container ">
            <div>Host your home</div>
            <div>Host an experience</div>
            <div>Help</div>
        </div>

    </section>
}