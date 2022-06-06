import { NavLink, Link } from 'react-router-dom'
import logoSvg from '../../assets/svg/logo.svg'

import { Loader } from '../loader'

export const DashboardHeader = ({ user }) => {


    if (!user) return <Loader />
    return <div className="dashboard-header">
        <header className="header-content-container flex space-between align-center">

            <div className="logo-app">
                <Link to='/'><h2><img src={logoSvg} /></h2></Link>
            </div>

            <nav className="dashboard-page-nav-container">
                <ul className="dashboard-page-nav flex space-between align-center clean-list">

                    <li><NavLink to="dashboard/">
                        <div className="after-container">

                            <div> Reservations </div>
                        </div>

                    </NavLink ></li>


                    <li className='active'>Listings</li>

                    <li><NavLink to="dashboard/trip">
                        <div className="after-container">

                            <div> My Trips </div>
                        </div>

                    </NavLink ></li>

                    <li><NavLink to="dashboard/wishlist">
                        <div className="after-container">

                            <div> Wish List </div>
                        </div>

                    </NavLink ></li>
                </ul>
            </nav>

            <div className="dashboard-host-options">
                {/* <img className="host-img" src={user.imgUrl} /> */}
            </div>
        </header>
    </div>

}