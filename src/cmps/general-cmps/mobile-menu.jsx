import searchSvg from '../../assets/svg/search-mobile-menu.svg'
import wishListSvg from '../../assets/svg/heart-mobile-menu.svg'
import profileSvg from '../../assets/svg/profile-mobile-menu.svg'
import travelsSvg from '../../assets/svg/logo-mobile-menu.svg'
import { Link } from 'react-router-dom'

export const MobileMenu = () => {

    // const { user } = useSelector(storeState => storeState.userModule)

    return <div className="mobile-menu flex direction-column align-center">
        <div className="mobile-menu-elements-container flex">
            <Link to='/explore'>
                <div className="mobile-element-container flex direction-column align-center">
                    <img className="search-img" src={searchSvg} />
                    <span className="name">Explore</span>
                </div>
            </Link>
            <Link to="/dashboard/trip">
                <div className="mobile-element-container flex direction-column align-center">
                    <img className="travels-img" src={travelsSvg} />
                    <span className="name">Travels</span>
                </div>
            </Link>
            <Link to="/dashboard/wishlist">
                <div className="mobile-element-container flex direction-column align-center">
                    <img className="wishList-img" src={wishListSvg} />
                    <span className="name">WishList</span>
                </div>
            </Link>
            <Link to="/login">
                <div className="mobile-element-container flex direction-column align-center">
                    <img className="Profile-img" src={profileSvg} />
                    <span className="name">Log in</span>
                </div>
            </Link>
        </div>
    </div>
}