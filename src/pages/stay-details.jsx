import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { showSuccessMsg } from '../services/event-bus.service'
import { stayService } from '../services/stay.service'
import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { ReviewList } from "../cmps/details-cmps/review-list"
import { useState } from 'react'



export const StayDetails = ({ history }) => {
    const { stayId } = useParams()
    const [stay, setStay] = useState(null)


    useEffect(() => {
        (async () => {
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
    return <section className="stay-details-page">
        <h2>HELLO FROM STAY DETAILS</h2>
        <div className="details-img-container">

            {stay.imgUrls.map((imgUrl, idx) => <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" />)}

        </div>



        {/* <StayReserve />
        <ReviewList />
        <StayMap /> */}
    </section>
}