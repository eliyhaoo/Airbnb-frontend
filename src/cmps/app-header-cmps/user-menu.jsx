import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../store/actions/user.actions'

export const UserMenu = ({ setModalUserOptions, modalUserOptions }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(storeState => storeState.userModule)

    const onLogOut = () => {
        dispatch(logOut())
    }

    const onLogin = (ev) => {
        ev.stopPropagation()
    }

    const onSignup = (ev) => {
        ev.stopPropagation()
    }

    return <React.Fragment>
        {modalUserOptions && <div className="user-options-screen" onClick={() => setModalUserOptions(false)}></div>}
        <section className="user-options flex direction-column">
   
        <div className="login-options-container" >
            {!user && <div onClick={onSignup}><Link to="/signup"><div className="sign-up">Sign up</div></Link></div>}
            {!user ? <div onClick={onLogin} ><Link to="/login"><div>Log in</div></Link> </div> : <div><Link to="/dashboard"><div>Dashboard</div></Link></div>}
        </div>

        <div className="host-options-container ">

            <div><Link to="/dashboard/wishlist">Wishlist</Link></div>
            <div>Host your home</div>
            {!user ? <div>Host an experience</div> : <div onClick={onLogOut}>Log out</div>}
            <div>Help</div>

        </div>

    </section>
    </React.Fragment>
}