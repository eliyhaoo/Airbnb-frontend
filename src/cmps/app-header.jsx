import { NavLink } from 'react-router-dom'
import { StayFilter } from "../cmps/stay-filter"

export const AppHeader = () => {

    return <header className="app-header">
        <h2>HELLO FROM APP HEADER</h2>
        <StayFilter />
        <NavLink to='/explore'>Explore</NavLink>
        <NavLink to='/'>Home</NavLink>
    </header>
}