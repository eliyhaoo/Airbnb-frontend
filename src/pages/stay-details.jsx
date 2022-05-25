import { StayMap } from "../cmps/details-cmps/stay-map"
import { StayReserve } from "../cmps/details-cmps/stay-reserve"
import { ReviewList } from "../cmps/details-cmps/review-list"
export const StayDetails = () => {

    return <section className="stay-details-page">
        <h2>HELLO FROM STAY DETAILS</h2>
        <StayReserve />
        <ReviewList />
        <StayMap />
    </section>
}