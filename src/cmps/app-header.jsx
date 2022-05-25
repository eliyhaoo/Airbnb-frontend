import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'
import { useDispatch, useSelector } from 'react-redux'
import { setIsInHomePage } from '../store/actions/system.action'

export const AppHeader = () => {

    const gIsInHomePage = useRef()
    const [isSearchOpen, setSearchToggle] = useState(true)
    const { isInHomePage } = useSelector(storeState => storeState.systemModule)
    

    useEffect(() => {
        gIsInHomePage.current = isInHomePage 
        window.addEventListener('scroll', onScroll)
        return ()=>{
           window.removeEventListener('scroll',onScroll)
        }
    }, [])

    useEffect(() => {
        gIsInHomePage.current = isInHomePage 
        if(gIsInHomePage.current){
            console.log('Homie');
            setSearchToggle(true)
        }else{
            setSearchToggle(false)

        }
        console.log('NANANSFOiaMFOISAMLKSAM:LSANMFKLA',gIsInHomePage);
    
    }, [isInHomePage])


    const onScroll = () => {
        // console.log('G HOMIEW',gIsInHomePage.current);
        // console.log('G OPEN SESMI',isSearchOpen);
        if (!gIsInHomePage.current) return
    const position = window.pageYOffset
    if (position>80){
        setSearchToggle(false)
        // console.log('yoooo');
        
    } else {
        setSearchToggle(true)
    }
    }

    // console.log('gIs IN HOMNE', gIsInHomePage.current);
    console.log('gIs SADSEAAAAARRRCCCGHHIN HOMNE', isSearchOpen);
    
    return <header className={`app-header full ${isSearchOpen? '':'close'}`}>
        <div className="header-container main-layout">
            <div className="header-content-container flex space-between align-center">
                <NavLink to='/'><h2>LOGO</h2></NavLink>
                {!isSearchOpen && <StaySearch />}
                <nav className="main-nav"> 
                    {/* <NavLink onClick={()=>{dispatch(setIsInHomePsage(false))}} to='/explore'>Explore</NavLink> */}
                    <NavLink  to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>
            </div>
           { isSearchOpen && <StaySearch />}
        </div>
    </header>
}