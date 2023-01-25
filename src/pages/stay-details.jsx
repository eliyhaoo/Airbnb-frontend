import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { StayHeaderActions } from '../cmps/details-cmps/stay-header-actions'
import { StayHeaderInfo } from '../cmps/details-cmps/stay-header-info'
import { CarouselComponent } from '../cmps/explore-cmps/carousel.component'

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
            <StayHeaderInfo stay={stay} />
            <StayHeaderActions history={history} />
        </div>
        <div className="details-img-container">
            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}
        </div>
        <CarouselComponent
            stayImgUrls={stay.imgUrls}
            stayId={stayId}
            history={history}
            showStatus={true}
        />
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