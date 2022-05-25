import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return <header className="app-header full">
        <div className="main-layout">
            <div className="header-container flex space-between align-center">
                <h2>HELLO FROM APP HEADER</h2>
                <nav className="main-nav">
                <NavLink to='/explore'>Explore</NavLink>
                <NavLink to='/'>Home</NavLink>
                </nav>
            </div>
        </div>
    </header>
}