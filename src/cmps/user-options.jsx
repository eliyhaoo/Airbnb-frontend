import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const UserOptions = () => {

    const onLogin = (ev) => {
        ev.stopPropagation()
    }

    const onSignup = (ev) => {
        ev.stopPropagation()
    }

    // const { user } = useSelector(storeState => storeState.userModule)
    // console.log('user', user)

    return <section className="user-options flex direction-column">

        <div className="login-options-container" >

            <div onClick={onSignup}>
                <Link to="/signup" >
                    <div >
                        Sign up
                    </div>
                </Link>
            </div>

            <div onClick={onLogin}>
                <Link to="/login" >
                    <div >
                        Log in
                    </div>
                </Link>
            </div>

        </div>

        <div className="host-options-container ">
            <div>Host your home</div>
            <div>Host an experience</div>
            <div>Help</div>
        </div>

    </section>
}