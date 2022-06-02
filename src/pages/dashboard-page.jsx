import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { NavLink } from 'react-router-dom'
import logoSvg from '../assets/svg/logo.svg'

export const DashboardPage = () => {

    const user = {
        _id: '622f3401e36c59e6164fab4d', imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
    }

    const dispatch = useDispatch()
    console.log('HELLO')
    useEffect(() => {
        dispatch(setVisitPage('dashboard-page'))
    }, [])
    return <section className="dashboard-page home-page-layout">
        <div className="dashboard-header-container">
            <div className="header-content-container flex space-between align-center">
                <div className="logo-app">
                    <NavLink to='/'><h2><img src={logoSvg} /></h2></NavLink>
                </div>
                <nav className="dashboard-page-nav-container">
                    <ul className="dashboard-page-nav flex space-between align-center clean-list">
                        <li>Reservations</li>
                        <li>Stays</li>
                        <li>My Trips</li>
                        <li>Wish List</li>
                    </ul>
                </nav>

                <div className="dashboard-host-options">
                    <img className="host-img" src={user.imgUrl} />
                </div>
            </div>
        </div>
        <div className="main-dashboard">
            main dashboard
        </div>

    </section>
}