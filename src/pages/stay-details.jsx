import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'

import { showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { StayReview } from "../cmps/details-cmps/stay-review"
import { StayAmenities } from '../cmps/details-cmps/stay-amenities'
import { setVisitPage } from '../store/actions/system.action'

import starSvg from '../assets/svg/star.svg'
import { StayInfo } from '../cmps/details-cmps/stay-info'

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
                    <span>{utilService.checkForPlurals('review', stay.reviews.length)} </span>
                </div>

                <span className="dot">·</span>

                <div className="num-of-reviews flex gap-5">
                    {stay.host.isSuperhost && <div>
                        <span className="superhost">Superhost</span>
                    </div>
                    }
                    <div className="city-address">{stay.address.city},</div>
                    <div className="country-address">{stay.address.country}</div>
                </div>
            </div>
        </div>

        <div className="details-img-container">
            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}
        </div>

        <section className="stay-display-info">
            <div className="stay-summary-container">
                <StayInfo stay={stay} />
                <StayAmenities stay={stay} />
            </div>

            <StayReserve stay={stay} />
        </section>

        <StayReview stay={stay} />
        <div className="stay-map">
            {<StayMap latlng={{ lat: stay.address.location.lat, lng: stay.address.location.lng }} />}
        </div>
    </section >


}