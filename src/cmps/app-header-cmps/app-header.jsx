import React, { useEffect, useRef, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StaySearch } from './stay-search'
import { StaySearchExpand } from './stay-search-expand'
import { UserOptions } from './user-options'
import { DashboardHeader } from '../dashboard-cmps/dashboard-header'
import { ReservationHeader } from './reservation-header'

import logoSvg from '../../assets/svg/logo.svg'
import userAvatarSvg from '../../assets/svg/user-avatar.svg'
import hamburgerMenu from '../../assets/svg/hamburger.svg'
import { socketService, SOCKET_ON_RESERVATION_RECEIVED } from '../../services/socket.service'
import { MainHeader } from './main-header'

const _AppHeader = ({ history }) => {
    const gVisitedPage = useRef()
    const { visitedPage } = useSelector(storeState => storeState.systemModule)
    const [isSearchOpen, setSearchToggle] = useState(true)
    const [modalOpen, setModalOpen] = useState(null)
    const [isBig, setIsBig] = useState(false)
    const [isReservationVisible, setReservationVisible] = useState(false)
    const [modalUserOptions, setModalUserOptions] = useState(false)
    const [isNotficationOn, toggleNotifaction] = useState(false)

    const { user } = useSelector(storeState => storeState.userModule)

    useEffect(() => {
        gVisitedPage.current = visitedPage
        window.addEventListener('scroll', onScroll)
        if (user?.isHost)
            socketService.off(SOCKET_ON_RESERVATION_RECEIVED);
        socketService.on(SOCKET_ON_RESERVATION_RECEIVED, () => toggleNotifaction(true));

        return () => {
            socketService.off(SOCKET_ON_RESERVATION_RECEIVED, () => toggleNotifaction(true));
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useEffect(() => {
        gVisitedPage.current = visitedPage
        gVisitedPage.current === 'home-page' ? setSearchToggle(true) : setSearchToggle(false)
    }, [visitedPage])

    useEffect(() => {
    }, [isSearchOpen, isNotficationOn])

    const onScroll = () => {
        const position = window.pageYOffset

        if (gVisitedPage.current === 'details-page') {
            if (position > 1600) setReservationVisible(true)
            else setReservationVisible(false)
        }
        if (gVisitedPage.current !== 'home-page') {
            setSearchToggle(false)
            return
        }
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

    const getMainHeaderClass = () => {
        let className = 'app-header full home-page-layout '
        className += gVisitedPage.current !== 'home-page' ? 'pages ' : ''
        className += isSearchOpen ? '' : 'close'
        return className

    }
    const getHeaderContainerClass = () => {
        let className = 'header-container full '
        className += visitedPage === 'details-page' ? 'details-layout ' :
            visitedPage === 'explore-page' ? 'main-layout ' : 'home-page-layout '
        return className


    }


    return visitedPage === 'become-host-page' ?
        <React.Fragment></React.Fragment>
        :
        visitedPage === 'dashboard-page' ?
            <DashboardHeader
                user={user}
                isNotficationOn={isNotficationOn}
                toggleNotifaction={toggleNotifaction}
                setModalUserOptions={setModalUserOptions}
                modalUserOptions={modalUserOptions} />

            : <header onClick={onCloseSearchBig}
                className={getMainHeaderClass()}>

                <div className={getHeaderContainerClass()}>
                    <div className="header-content-container flex space-between align-center">
                        <NavLink to='/'><h2 className='logo-img flex space-between'><img src={logoSvg} />
                            <span className="app-name">homebnb</span></h2></NavLink>

                        {!isSearchOpen && <StaySearch
                            setModalOpen={setModalOpen}
                            setSearchToggle={setSearchToggle}
                            setIsBig={setIsBig} />
                        }

                        {isReservationVisible ?
                            <ReservationHeader />
                            :
                            <MainHeader
                                setModalUserOptions={setModalUserOptions}
                                modalUserOptions={modalUserOptions}
                                visitedPage={visitedPage}
                                user={user}
                                isNotficationOn={isNotficationOn}
                            />
                        }
                    </div>

                    <StaySearchExpand
                        setSearchToggle={setSearchToggle}
                        isSearchOpen={isSearchOpen} history={history}
                        isBig={isBig} setIsBig={setIsBig}
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                    />
                </div>
            </header>

}

export const AppHeader = (withRouter(_AppHeader))







