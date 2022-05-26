import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { ReviewList } from "../cmps/details-cmps/review-list"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStayInStore } from '../store/actions/stay.action'


export const StayDetails = ({ history }) => {
    const { stayId } = useParams()
    const [stay, setStay] = useState(null)
    // const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            try {
                const stay = await stayService.getById(stayId)
                setStay(stay)

                if (!stay) history.push('/explore')
                // dispatch(setStayInStore(stay))
                showSuccessMsg('ELIII')
            } catch (err) {
                console.error(err)
            }
        })();
    }, [])

    const getAmenities = () => {
        return stay.amenities.splice(0, 10)
    }
    if (!stay) return <div className="loader">Loading...</div>
    return <section className="stay-details-page">
        <h1 className="stay-name-details">{stay.name}</h1>

        <div className="stay-details-container">
            <div className="stay-review-details">
                <span className="num-of-reviews">{stay.reviews.length} reviews </span>
                {stay.host.isSuperhost && <span className="superhost">Superhost </span>}
                <span className="city-address">{stay.address.city}</span>,
                <span className="country-address">{stay.address.country}</span>
            </div>

            <div className="activity-details">
                <span>Share </span>
                <span>Save</span>
            </div>
        </div>

        <div className="details-img-container">
            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}
        </div>

        <section className="stay-display-info">
            <div className="stay-summary-container">
                <div className="stay-info">
                    <h2>{stay.title} hosted by {stay.host.fullname}</h2>
                    <h4>{stay.guests} guests<span className="dot">·</span>{stay.bedrooms} bedrooms<span className="dot">·</span> {stay.beds} beds<span className="dot">·</span> {stay.bathrooms} baths</h4>
                    <p>{stay.summary}</p>
                </div>
                {/* <img src={stay.host.thumbnailUrl} alt="profile" /> */}
                <div className="stay-amenities">{getAmenities().map((amenitie, idx) => <div key={idx}>{amenitie}</div>)}</div>
            </div>

            <StayReserve stay={stay} />




        </section>



    </section>
    {/* <ReviewList /> */ }

    {/* WORKS WITH ORIGINAL LATLNG */ }
    {/* <StayMap latlng={{ lat: stay.address.location.lat, lng: stay.address.location.lng }} /> */ }

}