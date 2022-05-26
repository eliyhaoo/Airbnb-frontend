import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'
import { useSelector } from 'react-redux'
import { StaySearchExpand } from './stay-search-expand'


export const AppHeader = () => {

    const gIsInHomePage = useRef()
    const [isSearchOpen, setSearchToggle] = useState(true)
    const { isInHomePage } = useSelector(storeState => storeState.systemModule)


    useEffect(() => {
        gIsInHomePage.current = isInHomePage
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useEffect(() => {
        gIsInHomePage.current = isInHomePage
        gIsInHomePage.current ? setSearchToggle(true) : setSearchToggle(false) 
    },[isInHomePage])


    const onScroll = () => {
 
        if (!gIsInHomePage.current) return
        const position = window.pageYOffset
        position > 80 ?setSearchToggle(false) :setSearchToggle(true)
     
    }


    return <header className={`app-header full main-layout ${isSearchOpen ? '' : 'close'}`}>

        <div className="header-container full main-layout">

            <div className="header-content-container flex space-between align-center">

                <NavLink to='/'><h2>LOGO</h2></NavLink>

                {!isSearchOpen && <StaySearch />}

                <nav className="main-nav">
                    <NavLink to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>

            </div>
            
            <StaySearchExpand/>
            {/* {isSearchOpen && <StaySearch className="big-searchbar"/>} */}
            
        </div>
    </header>
}