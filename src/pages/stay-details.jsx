import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { utilService } from '../services/util.service'
import { stayService } from '../services/stay.service'
import { setVisitPage } from '../store/actions/system.action'
import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { StayReview } from "../cmps/details-cmps/stay-review"
import { StayAmenities } from '../cmps/details-cmps/stay-amenities'
import { StayGeneralInfo } from '../cmps/details-cmps/stay-general-info'
import { StayInfo } from '../cmps/details-cmps/stay-info'
import { Loader } from '../cmps/general-cmps/loader'
import { AddReview } from '../cmps/details-cmps/add-review'
import { ReviewList } from '../cmps/details-cmps/review-list'

import starSvg from '../assets/svg/star.svg'
import shareSvg from '../assets/svg/Share.svg'
import saveSvg from '../assets/svg/Save.svg'

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
            } catch (err) {
                console.error(err)
            }
        })();
    }, [])


    if (!stay) return <Loader />
    return <section className="stay-details-page details-layout">

        <h2 className="stay-name-details">{stay.name}</h2>

        <div className="stay-details-container flex space-between">
            <div className="stay-review-details flex">
                <img src={starSvg} alt="star" />
                <div>
                    {stay.reviewScores.Rating}
                </div>
                <span>·</span>
                <div className="reviews flex">
                    <span>{utilService.checkForPlurals('review', stay.reviews.length)} </span>
                </div>
                <span className="dot">·</span>
                <div className="num-of-reviews flex gap-5">
                    {stay.host.isSuperhost && <div>
                        <span className="superhost">Superhost</span>
                    </div>}
                    <div className="city-address">{stay.address.city},</div>
                    <div className="country-address">{stay.address.country}</div>
                </div>
            </div>

            <div className="actions-container flex">
                <div className="action-container flex">
                    <img className="share-img" src={shareSvg} alt="share" />
                    <span>Share</span>
                </div>

                <div className="action-container flex">
                    <img className="save-img" src={saveSvg} alt="save" />
                    <span>Save</span>
                </div>
            </div>

        </div>

        <div className="details-img-container">
            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}
        </div>

        <section className="stay-display-info">
            <div className="stay-summary-container">
                <StayInfo stay={stay} />
                <StayGeneralInfo />
                <StayAmenities stay={stay} />
            </div>

            <StayReserve stay={stay} />
        </section>


        <StayReview stay={stay} />
        <ReviewList stay={stay} />
        <AddReview stay={stay} />

        <div className="stay-map">
            {<StayMap latlng={{ lat: stay.address.location.lat, lng: stay.address.location.lng }} />}
        </div>
    </section >
}