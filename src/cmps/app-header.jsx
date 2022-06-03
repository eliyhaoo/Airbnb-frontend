import { useEffect, useRef, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { StaySearch } from './stay-search'

import { StaySearchExpand } from './stay-search-expand'
import { UserOptions } from './user-options'

import logoSvg from '../assets/svg/logo.svg'
import userAvatarSvg from '../assets/svg/user-avatar.svg'
import hamburgerMenu from '../assets/svg/hamburger.svg'



const _AppHeader = ({ history }) => {
    const gVisitedPage = useRef()
    const { visitedPage } = useSelector(storeState => storeState.systemModule)
    const [isSearchOpen, setSearchToggle] = useState(true)
    const [modalOpen, setModalOpen] = useState(null)
    const [isBig, setIsBig] = useState(false)
    const [modalUserOptions, setModalUserOptions] = useState(false)

    const { user } = useSelector(storeState => storeState.userModule)


    // const user = { _id: '622f3401e36c59e6164fab4d' }
    useEffect(() => {
        gVisitedPage.current = visitedPage
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useEffect(() => {
        gVisitedPage.current = visitedPage
        gVisitedPage.current === 'home-page' ? setSearchToggle(true) : setSearchToggle(false)
    }, [visitedPage])

    useEffect(() => {
    }, [isSearchOpen])

    const onScroll = () => {

        if (gVisitedPage.current !== 'home-page') {
            setSearchToggle(false)
            return
        }
        const position = window.pageYOffset
        if (position > 80) {
            setSearchToggle(false)
            setModalOpen(null)
            setIsBig(false)
        } else {
            setSearchToggle(true)
        }
    }

    const onCloseSearchBig = () => {
        setModalOpen(null)
        setIsBig(false)
    }


    return <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full home-page-layout  ${isSearchOpen ? '' : 'close'}`}>
        <div className={`header-container full ${visitedPage === 'details-page' ? 'details-layout' : visitedPage === 'explore-page' ? 'main-layout' : 'home-page-layout'}`}>
            <div className="header-content-container flex space-between align-center">

                <NavLink to='/'><h2><img src={logoSvg} /></h2></NavLink>
                {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}

                <div className="box user-nav-container flex space-between align-center">
                    <nav className="box main-nav flex space-between align-items">
                        {visitedPage !== 'explore-page' && <NavLink to='/explore'>Explore</NavLink>}
                        {/* {visitedPage !== 'home-page' && <NavLink to='/'>Home</NavLink>} */}

                        <NavLink to='/'>Become a Host</NavLink>
                        {/* {user._id && <NavLink to={`/dashboard/:userId=${user._id}`}>Dashboard</NavLink>} */}
                        {user && <NavLink to={`/dashboard/:userId=${user._id}`}>Dashboard</NavLink>}
                    </nav>

                    <div className="box user-details-container flex space between align-center" onClick={() => setModalUserOptions(!modalUserOptions)}>
                        <img className="user-menu" src={hamburgerMenu} alt="user-menu" />
                        {/* <img className="user-avatar" src={userAvatarSvg} alt="user" /> */}
                        {user ? <img className="user-img" src={user.imgUrl} alt="user" /> : <img className="user-avatar" src={userAvatarSvg} alt="user" />}

                        <div className={`user-options-container ${modalUserOptions && 'open'}`}>
                            <UserOptions />
                        </div>

                    </div>
                </div>
            </div>

            <StaySearchExpand setSearchToggle={setSearchToggle} isSearchOpen={isSearchOpen} history={history} isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        </div>
    </header>


}




export const AppHeader = (withRouter(_AppHeader))










    // if (gVisitedPage.current !== 'details-page') return (gVisitedPage.current !== 'details-page') && <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full main-layout   ${isSearchOpen ? '' : 'close'}`}>

    //     {/* <div className={headerClass}> */}
    //     <div className={`header-container full main-layout`}>

    //         <div className="header-content-container flex space-between align-center">

    //             <NavLink to='/'><h2>LOGO</h2></NavLink>

    //             {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}
    //             {/* {!isSearchOpen && <StaySearch  setModalOpen={onSmallSearchClick} />} */}

    //             <div className="user-nav-container flex space-between">

    //                 <nav className="main-nav">
    //                     <NavLink to='/explore'>Explore</NavLink>
    //                     <a href="/">Become a host</a>
    //                 </nav>
    //                 <div className="user-details-container">
    //                 </div>

    //             </div>

    //         </div>

    //         {isSearchOpen && <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />}

    //     </div>

    // </header>


    // if (gVisitedPage.current === 'details-page') return <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full main-layout   ${isSearchOpen ? '' : 'close'}`}>

    //     {/* <div className={headerClass}> */}
    //     <div className={`header-container full details-layout`}>

    //         <div className="header-content-container flex space-between align-center">

    //             <NavLink to='/'><h2>LOGO</h2></NavLink>

    //             {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}
    //             {/* {!isSearchOpen && <StaySearch  setModalOpen={onSmallSearchClick} />} */}

    //             <nav className="main-nav">
    //                 <NavLink to='/explore'>Explore</NavLink>
    //                 <a href="/">Become a host</a>
    //             </nav>

    //         </div>

    //         {isSearchOpen && <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />}

    //     </div>

    // </header>







