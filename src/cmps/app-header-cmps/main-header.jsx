import { NavLink } from "react-router-dom"
import { UserMenu } from "./user-menu"
import userAvatarSvg from '../../assets/svg/user-avatar.svg'
import hamburgerMenu from '../../assets/svg/hamburger.svg'

export const MainHeader = ({ setModalUserOptions, modalUserOptions, visitedPage, user, isNotficationOn }) => {

    return <div className="box user-nav-container flex align-center">
        <nav className="box main-nav flex space-between align-items">
            {visitedPage !== 'explore-page' && <NavLink to='/explore'>Explore</NavLink>}
            <NavLink to={'/becomehost'}>Become a Host</NavLink>
        </nav>
        <div className="user-details-container flex space between align-center" onClick={() => setModalUserOptions(!modalUserOptions)}>
            <img className="user-menu" src={hamburgerMenu} alt="user-menu" />
            {user ?
                <div className="dashboard-host-options">
                    <img className="user-img" src={user.imgUrl} alt="user" />
                    {isNotficationOn && <div className="new-info-indicator"></div>}
                </div>
                :
                <img className="user-avatar" src={userAvatarSvg} alt="user" />}
            <div className={`user-options-container ${modalUserOptions && 'open'}`}>
                <UserMenu setModalUserOptions={setModalUserOptions} modalUserOptions={modalUserOptions} />
            </div>
        </div>
    </div>
}

