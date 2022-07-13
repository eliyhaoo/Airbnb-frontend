
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { setVisitPage } from "../store/actions/system.action"

export const HomePage = ({ history }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVisitPage('home-page'))
    }, [])


    const onSelectCity = (city) => {
        history.push(`/explore/?location=${city}`)
    }
    const cities = ['New York', 'Santorini', 'Paris', 'Dubai']

    return <section className="home-page full">
        <div className="hero-container full">

            <div className="hero full flex">

            <span className="hero-text">
                Not sure where to go? Perfect.
            </span>
            </div>

        </div>

        <div className="popular-destinations home-page-layout">
            <h1 className="popular-destinations-title">Popular Destinations</h1>
            <div className="popular-destinations-imgs-container">
                {cities.map((city, idx) =>
                    <div key={idx} onClick={() => onSelectCity(city)} className="city-container flex direction-column">
                        <div key={idx} className="city-container flex direction-column">
                            <img className="city-img" src={require(`../assets/img/cities/${city}.jpg`)} alt="city" /> <span>{city}</span>
                        </div>
                    </div>
                )}

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
