import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './stay-search'
import { useSelector } from 'react-redux'
import { StaySearchExpand } from './stay-search-expand'


export const AppHeader = () => {

    const gVisitedPage = useRef()
    const { visitedPage } = useSelector(storeState => storeState.systemModule)
    const [isSearchOpen, setSearchToggle] = useState(true)
    const [modalOpen, setModalOpen] = useState(null)
    const [isBig, setIsBig] = useState(false)


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



<<<<<<< HEAD

    const headerClass = `header-container full ${gVisitedPage.current !== 'details-page' ? 'main-layout' : 'details-layout'}`

=======
>>>>>>> 80e6a70a6b727cf7bdcf76704d3392c25e6e3606

    console.log('G VISISTEDDD',gVisitedPage.current);

    if (gVisitedPage.current !== 'details-page') return (gVisitedPage.current !== 'details-page') && <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full main-layout   ${isSearchOpen ? '' : 'close'}`}>

<<<<<<< HEAD
        <div className={headerClass}>
            {/* <div className={`header-container full ${gVisitedPage.current !== 'details-page' ? 'main-layout':'details-layout'}`}> */}
=======
        {/* <div className={headerClass}> */}
        <div className={`header-container full main-layout`}>
>>>>>>> 80e6a70a6b727cf7bdcf76704d3392c25e6e3606

            <div className="header-content-container flex space-between align-center">

                <NavLink to='/'><h2>LOGO</h2></NavLink>

                {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}
                {/* {!isSearchOpen && <StaySearch  setModalOpen={onSmallSearchClick} />} */}

                <nav className="main-nav">
                    <NavLink to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>

            </div>

            {isSearchOpen && <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />}

        </div>

    </header>


    if (gVisitedPage.current === 'details-page') return <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full main-layout   ${isSearchOpen ? '' : 'close'}`}>

        {/* <div className={headerClass}> */}
        <div className={`header-container full details-layout`}>

            <div className="header-content-container flex space-between align-center">

                <NavLink to='/'><h2>LOGO</h2></NavLink>

                {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}
                {/* {!isSearchOpen && <StaySearch  setModalOpen={onSmallSearchClick} />} */}

                <nav className="main-nav">
                    <NavLink to='/explore'>Explore</NavLink>
                    <a href="/">Become a host</a>
                </nav>

            </div>

            {isSearchOpen && <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />}

        </div>

    </header>
}




// return <header onClick={onCloseSearchBig} className={`app-header ${gVisitedPage.current !== 'home-page' ? 'pages' : ''} full main-layout   ${isSearchOpen ? '' : 'close'}`}>

// {/* <div className={headerClass}> */}
// <div className={`header-container full ${gVisitedPage.current !== 'details-page' ? 'main-layout':'details-layout'}`}>

//     <div className="header-content-container flex space-between align-center">

//         <NavLink to='/'><h2>LOGO</h2></NavLink>

//         {!isSearchOpen && <StaySearch setModalOpen={setModalOpen} setSearchToggle={setSearchToggle} setIsBig={setIsBig} />}
//         {/* {!isSearchOpen && <StaySearch  setModalOpen={onSmallSearchClick} />} */}

//         <nav className="main-nav">
//             <NavLink to='/explore'>Explore</NavLink>
//             <a href="/">Become a host</a>
//         </nav>

//     </div>

//     {isSearchOpen && <StaySearchExpand isBig={isBig} setIsBig={setIsBig} modalOpen={modalOpen} setModalOpen={setModalOpen} />}

// </div>

// </header>