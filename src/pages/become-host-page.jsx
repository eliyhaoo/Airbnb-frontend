import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisitPage } from '../store/actions/system.action'
import { NavLink } from 'react-router-dom'

import logoSvg from '../assets/svg/logo-white.svg'

export const BecomeHostPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVisitPage('become-host-page'))
    }, [])


    return <section className="become-host-page full">
        <div className="header-host-page-container full">
            <div className="general flex">
                <div className="header-host-page-elements">
                    <NavLink to='/'><img className="logo-img" src={logoSvg} /></NavLink>
                    <span>Open your door
                        to hosting</span>

                    <button className="become-host-btn">Try hosting</button>
                </div>

                <div className="become-host-video-container">
                    <video className="become-host-video" autoPlay crossOrigin="anonymous" playsInline="" preload="auto"><source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265" type="video/mp4; codecs=hevc"></source><source src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4" type="video/mp4"></source></video>
                    <div className="play-btn"><button aria-label="Play" type="button" className="_1osbyo4">
                        <span className=" dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                            <path d="M27.024 14.273L6.008 2.013c-.461-.268-1-.342-1.517-.206A2 2 0 0 0 3 3.741V28.26a2.002 2.002 0 0 0 3.008 1.728l21.015-12.26a2.003 2.003 0 0 0 .001-3.454z"></path></svg>
                        </span></button></div>
                </div>
            </div>
        </div>
        <div className="text">
            You can host
            <br></br>
            anything, anywhere
        </div>
    </section >
}