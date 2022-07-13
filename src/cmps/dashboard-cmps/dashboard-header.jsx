import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoSvg from '../../assets/svg/logo.svg'
import userAvatarSvg from '../../assets/svg/user-avatar.svg'

import { UserMenu } from '../app-header-cmps/user-menu'

export const DashboardHeader = ({ user, isNotficationOn, toggleNotifaction,setModalUserOptions ,modalUserOptions}) => {

    useEffect(() => {
        toggleNotifaction(false)
    }, [])

const setModal = ()=>{
    setModalUserOptions(!modalUserOptions)
}

    return <div className="dashboard-header">
        <header className="header-content-container flex space-between align-center">

            <div className="logo-app">
                <Link to='/'><h2><img src={logoSvg} /></h2></Link>
            </div>

            <nav className="dashboard-page-nav-container">
                <ul className="dashboard-page-nav flex space-between align-center clean-list">

                    <li><NavLink to="/dashboard/listings">
                        <div className="after-container">

                            <div className='dashboard-link-title'> Reservations </div>
                        </div>

                    </NavLink ></li>


                    <li className='dashboard-link-title'>Listings</li>

                    <li><NavLink to="/dashboard/trip">
                        {/* <div className="after-container"> */}

                        <div className='dashboard-link-title'> My Trips </div>
                        {/* </div> */}

                    </NavLink ></li>

                    <li><NavLink to="/dashboard/wishlist">
                        {/* <div className="after-container"> */}

                        <div className='dashboard-link-title'> Wish List </div>
                        {/* </div> */}

                    </NavLink ></li>
                </ul>
            </nav>

            <div className="box user-details-container flex space between align-center" onClick={setModal}>
                {/* <img className="user-menu" src={hamburgerMenu} alt="user-menu" /> */}
                {user ?
                    <div className="dashboard-host-options">
                        <img className="user-img" src={user.imgUrl} alt="user" />
                        {isNotficationOn && <div className="new-info-indicator"></div>}
                    </div>
                    :
                    <img className="user-avatar" src={userAvatarSvg} alt="user" />}

                <div className={`user-options-container ${modalUserOptions && 'open'}`}>
                    <UserMenu />
                </div>

            </div>

        </header>
    </div>

}