import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'
import { useSelector } from 'react-redux'
import { StaySearchExpand } from './stay-search-expand'


export const AppHeader = () => {

    const gIsInHomePage = useRef()
    const [isSearchOpen, setSearchToggle] = useState(true)
    const { isInHomePage } = useSelector(storeState => storeState.systemModule)
    const [modalOpen,setModalOpen]=useState('location')
    const [isBig, setIsBig]= useState(false)


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
 
        if (!gIsInHomePage.current) {
            setSearchToggle(false)
            return
        }
        const position = window.pageYOffset
        position > 80 ?setSearchToggle(false) :setSearchToggle(true)
     
    }

    const onCloseSearchBig=()=>{
        setModalOpen(null)
        setIsBig(false)
    }

    const onSmallSearchClick =(field)=>{
        setSearchToggle(true)
        setModalOpen(field)
    }


    return <header onClick={onCloseSearchBig} className={`app-header full main-layout ${isSearchOpen ? '' : 'close'}`}>

        <div className="header-container full main-layout">

            <div className="header-content-container flex space-between align-center">

                <NavLink to='/'><h2>LOGO</h2></NavLink>

                {!isSearchOpen && <StaySearch setModalOpen={onSmallSearchClick} />}

                <nav className="main-nav">
                    <NavLink to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>

            </div>
            
            {isSearchOpen &&  <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
            
        </div>
        
    </header>
}