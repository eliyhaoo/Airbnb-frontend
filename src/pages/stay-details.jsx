import { MapStay } from "../cmps/details-cmps/map-stay"
import { ReserveStay } from "../cmps/details-cmps/reserve-stay"
import { ReviewList } from "../cmps/details-cmps/review-list"
export const StayDetails = () => {

    return <section className="stay-details">
        <h2>HELLO FROM STAY DETAILS</h2>
        <ReserveStay />
        <ReviewList />
        <MapStay />
    </section>
}