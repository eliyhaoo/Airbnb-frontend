
import { FormReserve } from './form-reserve'
export const StayReserve = ({ stay }) => {
    if (!stay) return <div>Loading...</div>
    return <div className="stay-reserve">
        <p className="stay-reserve-price"><span className="price-span">${stay.price}</span> night</p>
        <p className="preview-rating">★{stay.reviewScores.Rating} · <span className="reviews-count-span">{stay.reviews.length} reviews</span></p>
        <FormReserve stay={stay} />
    </div>
}