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

                <div className="num-of-reviews flex space-between gap-5">
                    <img src={starSvg} alt="star" />
                    <div>
                        {stay.reviewScores.rating.toFixed(1)}
                    </div>
                    <span>·</span>
                    <div className="flex gap-5">
                        <span>{stay.reviews.length}</span>
                        <span>reviews</span>
                    </div>
                </div>

                <div>{stay.host.isSuperhost && <span className="superhost">Superhost </span>}</div>
                {/* <div className="city-address">{stay.address.city},</div>
                <div className="country-address">{stay.address.country}</div> */}
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
                    <div>
                        <h2>{stay.title} hosted by {stay.host.fullname}</h2>
                        <h4>{stay.guests} guests<span className="dot">·</span>{stay.bedrooms} bedrooms<span className="dot">·</span> {stay.beds} beds<span className="dot">·</span> {stay.bathrooms} baths</h4>
                    </div>
                    <img src={stay.host.thumbnailUrl} alt="profile" />
                </div>
                <p>{stay.summary}</p>

                <div className="stay-amenities ">{getAmenities().map((amenitie, idx) =>
                    <div key={idx}>

                        <div className='flex'>
                            {/* <div className="amenite-img wifi"> </div> */}
                            <div className={`amenite-img ${amenitie}`}> </div>
                            <div>{amenitie}</div>
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