import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
export const HomePage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setVisitPage('home-page'))
    }, [])

    return <section className="home-page full">

        <div className="hero full flex">
            {/* <img src="https://a0.muscache.com/im/pictures/miso/Hosting-5904771/original/ab9a30d4-a6cf-4b3a-8416-cf7314ed5432.jpeg?im_w=1200" alt="hero" /> */}
        </div>

        <div className="popular-destinations main-layout">
            <h1 className="popular-destinations-title">Popular Destinations</h1>
            <div className="popular-destinations-imgs-container">
                <div className="city-img-container"><img className="city-img" src={require("../assets/img/cities/new-york.jpg")} /></div>
                <div className="city-img-container"><img className="city-img" src={require("../assets/img/cities/paris.jpg")} /></div>
                <div className="city-img-container"><img className="city-img" src={require("../assets/img/cities/santorini.jpg")} /></div>
                <div className="city-img-container"><img className="city-img" src={require("../assets/img/cities/dubai.jpg")} /></div>
            </div>
        </div>
    </section>
}