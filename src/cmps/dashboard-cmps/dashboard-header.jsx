import { NavLink, Link } from 'react-router-dom'
import logoSvg from '../../assets/svg/logo.svg'

export const DashboardHeader = ({ user }) => {



    return <div className="dashboard-header">
        <header className="header-content-container flex space-between align-center">

            <div className="logo-app">
                <Link to='/'><h2><img src={logoSvg} /></h2></Link>
            </div>

            <nav className="dashboard-page-nav-container">
                <ul className="dashboard-page-nav flex space-between align-center clean-list">
                    <li><NavLink to="/dashboard">
                        <div className="after-container">

                        <div> Reservations </div>
                        </div>

                    </NavLink ></li>


                    <li className='active'>Stays</li>
                    <li>My Trips</li>
                    <li>Wish List</li>
                </ul>
            </nav>

            <div className="dashboard-host-options">
                <img className="host-img" src={user.imgUrl} />
            </div>
        </header>
    </div>

}