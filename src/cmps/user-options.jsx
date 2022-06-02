import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import {logOut} from '../store/actions/user.actions'





export const UserOptions = () => {

    const dispatch = useDispatch()
    const { user } = useSelector(storeState => storeState.userModule)
    console.log('user', user)
    

    // useEffect(() => {

    // }, [user])

    const onLogOut = (ev) => {
        console.log('login out', user)
        dispatch(logOut())
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

            {!user ?
                <div onClick={onLogin} >
                    <Link to="/login" >
                        <div>  Log in</div>
                    </Link> </div>
                :
                <div onClick={onLogOut}> Log out</div>
            }

        </div>

        <div className="host-options-container ">
            <div>Host your home</div>
            <div>Host an experience</div>
            <div>Help</div>
        </div>

    </section>
}