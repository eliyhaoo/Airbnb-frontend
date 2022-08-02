import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../store/actions/user.actions'
import searchSvg from '../../assets/svg/search-mobile-menu.svg'
import wishListSvg from '../../assets/svg/heart-mobile-menu.svg'
import profileSvg from '../../assets/svg/profile-mobile-menu.svg'
import travelsSvg from '../../assets/svg/logo-mobile-menu.svg'
import home from '../../assets/svg/home-mobile-menu.svg'

export const MobileMenu = () => {
    const dispatch = useDispatch()
    const [activeOption, setActiveOption] = useState('home')
    const { user } = useSelector(storeState => storeState.userModule)

    const onLogOut = () => {
        dispatch(logOut())
    }

    useEffect(() => {
    }, [activeOption])

    const onChooseActiveOption = (optionName) => {
        if (optionName !== activeOption) setActiveOption(optionName)
    }

    return <div className="mobile-menu flex direction-column align-center">
        <div className="mobile-menu-elements-container flex">
            <Link to="/">
                <div className={("mobile-element-container flex direction-column align-center" + ((activeOption === 'home') ? ' active' : ''))} onClick={() => onChooseActiveOption('home')}>
                    <img className="Profile-img" src={home} />
                    <span className="name">Home</span>
                </div>
            </Link>
            <Link to='/explore'>
                <div className={("mobile-element-container flex direction-column align-center" + ((activeOption === 'explore') ? ' active' : ''))} onClick={() => onChooseActiveOption('explore')}>
                    <img className="search-img" src={searchSvg} />
                    <span className="name">Explore</span>
                </div>
            </Link>
            <Link to="/dashboard/trip">
                <div className={("mobile-element-container flex direction-column align-center" + ((activeOption === 'travels') ? ' active' : ''))} onClick={() => onChooseActiveOption('travels')}>
                    <img className="travels-img" src={travelsSvg} />
                    <span className="name">Travels</span>
                </div>
            </Link>
            <Link to="/dashboard/wishlist">
                <div className={("mobile-element-container flex direction-column align-center" + ((activeOption === 'wishlist') ? ' active' : ''))} onClick={() => onChooseActiveOption('wishlist')}>
                    <img className="wishList-img" src={wishListSvg} />
                    <span className="name">WishList</span>
                </div>
            </Link>
            {!user && <Link to="/login">
                <div className={("mobile-element-container flex direction-column align-center" + ((activeOption === 'login') ? ' active' : ''))} onClick={() => onChooseActiveOption('login')}>
                    <img className="Profile-img" src={profileSvg} />
                    <span className="name">Log in</span>
                </div>
            </Link>}
            {user &&
                <div className={("mobile-element-container flex direction-column align-center")} onClick={onLogOut}>
                    <img className="user-img" src={user.imgUrl} />
                    <span className="name">Logout</span>
                </div>
            }
        </div>
    </div>
}