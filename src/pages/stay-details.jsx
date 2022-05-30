import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import { showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { StayReview } from "../cmps/details-cmps/stay-review"
import { setVisitPage } from '../store/actions/system.action'
import { useDispatch } from 'react-redux'

import starSvg from '../assets/svg/star.svg'


export const StayDetails = ({ history }) => {
    const dispatch = useDispatch()
    const { stayId } = useParams()
    const [stay, setStay] = useState(null)


    useEffect(() => {
        (async () => {
            dispatch(setVisitPage('details-page'))
            try {
                const stay = await stayService.getById(stayId)
                setStay(stay)

                if (!stay) history.push('/explore')
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
    return <section className="stay-details-page details-layout">
        <h1 className="stay-name-details">{stay.name}</h1>

        <div className="stay-details-container flex space-between">

            <div className="stay-review-details flex">
                <img src={starSvg} alt="star" />
                <div>
                    {stay.reviewScores.rating.toFixed(1)}
                </div>
                <span>·</span>
                <div className="reviews flex">
                    <span>{stay.reviews.length} reviews</span>
                </div>

                <span className="dot">·</span>

                <div className="num-of-reviews flex gap-5">
                    <div>{stay.host.isSuperhost && <span className="superhost">Superhost </span>}</div>
                    <div className="city-address">{stay.address.city},</div>
                    <div className="country-address">{stay.address.country}</div>
                </div>

            </div>

            {/* <div className="activity-details">
                <span>Share </span>
                <span>Save</span>
            </div> */}

        </div>

        <div className="details-img-container">
            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}
        </div>

        <section className="stay-display-info">
            <div className="stay-summary-container">
                <div className="stay-info">
                    <div>
                        <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                        <span>
                            {stay.guests} guests
                            <span className="dot">·</span>
                            {stay.bedrooms} bedrooms
                            <span className="dot">·</span>
                            {stay.beds} beds
                            <span className="dot">·</span>
                            {stay.bath} baths
                        </span>
                    </div>
                    <img src={stay.host.thumbnailUrl} alt="profile" />
                </div>

                <div className="air-cover">
                    <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" />
                    <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                </div>

                <div className="stay-description">
                    <p>{stay.summary}</p>
                </div>

                <div className="amenities">
                    <h2>What this place offers</h2>
                </div>
                <div className="stay-amenities ">
                    {getAmenities().map((amenitie, idx) =>
                        <div key={idx}>

                            <div className='amenite-img-container flex'>
                                <div className={`amenite-img ${amenitie}`}> </div>
                                <div className="amenite">{amenitie}</div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
            <StayReserve stay={stay} />
        </section>

        <StayReview stay={stay} />
        <div className="stay-map">
            {<StayMap latlng={{ lat: stay.address.location.lat, lng: stay.address.location.lng }} />}
        </div>
    </section >






    // { WORKS WITH ORIGINAL LATLNG }

}