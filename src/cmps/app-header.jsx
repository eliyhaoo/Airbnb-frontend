import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'
import {eventBusService}from '../services/event-bus.service'

export const AppHeader = () => {

    const [isSearchOpen, setSearchToggle] = useState(true)
    const [isInExplore ,setIsInExplore] = useState(false)
    
    let removeOnEnterExploreEvent

    useEffect(() => {
        console.log('CMP MOUNTEDDDDD',isInExplore);
        window.addEventListener('scroll', onScroll)
        removeOnEnterExploreEvent = eventBusService.on('enter-explore',onEnterAndExitExplore)
        return ()=>{
           window.removeEventListener('scroll',onScroll)
           removeOnEnterExploreEvent()
        }
    }, [])

    const onScroll = () => {
        if (isInExplore) return
        console.log('isInExplore',isInExplore);
    const position = window.pageYOffset
    if (position>80){
        setSearchToggle(false)
        
    } else {
        setSearchToggle(true)
    }
    }
    const onEnterAndExitExplore = (boolean)=>{
        console.log('Boolean',boolean);
        setIsInExplore(true)
        setSearchToggle(boolean)
        // if (!boolean){
        //     console.log('Setting state',boolean)
        //     setIsInExplore(true)
        // } 
        // else{
        //     setIsInExplore(false)
        // }  
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