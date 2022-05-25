import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'

export const AppHeader = () => {

    const [isSearchOpen, setSearchToggle] = useState(true)
    

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return ()=>{
           window.removeEventListener('scroll',onScroll)
        }
    }, [])

    const onScroll = (ev) => {
    const position = window.pageYOffset
    if (position>80){
        setSearchToggle(false)
    } else {
        setSearchToggle(true)
    }
    }

    
    return <header className={`app-header full ${isSearchOpen? '':'close'}`}>
        <div className="header-container main-layout">
            <div className="header-content-container flex space-between align-center">
                <NavLink to='/'><h2>LOGO</h2></NavLink>
                { !isSearchOpen && <StaySearch />}
                <nav className="main-nav"> 
                    <NavLink to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>
            </div>
           { isSearchOpen && <StaySearch />}
        </div>
    </header>
}