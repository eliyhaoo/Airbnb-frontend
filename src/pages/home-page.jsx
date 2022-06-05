import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { userService } from "../services/user.service"
import { Link } from 'react-router-dom'

export const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVisitPage('home-page'))
    }, [])


    return <section className="home-page full">

        <div className="hero full flex">
            {/* <img src="https://a0.muscache.com/im/pictures/miso/Hosting-5904771/original/ab9a30d4-a6cf-4b3a-8416-cf7314ed5432.jpeg?im_w=1200" alt="hero" /> */}
            {/* <span>Home Away From Home</span> */}

        </div>

        <div className="popular-destinations home-page-layout">
            <h1 className="popular-destinations-title">Popular Destinations</h1>
            <div className="popular-destinations-imgs-container">
                <div className="city-container flex direction-column"><img className="city-img"
                    src={require("../assets/img/cities/new-york.jpg")} /><span>New York</span></div>
                <div className="city-container flex direction-column"><img className="city-img"
                    src={require("../assets/img/cities/paris.jpg")} /><span>Paris</span></div>
                <div className="city-container flex direction-column"><img className="city-img"
                    src={require("../assets/img/cities/santorini.jpg")} /><span>Santorini</span></div>
                <div className="city-container flex direction-column"><img className="city-img"
                    src={require("../assets/img/cities/dubai.jpg")} /><span>Dubai</span></div>
            </div>
        </div>

        <div className="become-a-host-container home-page-layout">
            <div className="become-a-host-elements-container">
                <img className="become-a-host-img" src={require('../assets/img/become-a-host.jpg')} />
                <Link to={'/becomehost'}><button className="become-a-host-btn">Become a Host</button></Link>
            </div>
        </div>
    </section>
}