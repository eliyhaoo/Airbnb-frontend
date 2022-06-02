import starSvg from '../../assets/svg/star.svg'
import { utilService } from '../../services/util.service'

import { FormReserve } from './form-reserve'
export const StayReserve = ({ stay }) => {

    if (!stay) return <div>Loading...</div>
    return <div className="stay-reserve">

        <div className='reserve-header flex space-between align-center'>

            <p className="stay-reserve-price"><span className="price-span">${utilService.getPriceWithCommas(stay.price)}</span> night</p>

            <div className="preview-rating flex space-between">
                <img src={starSvg} alt="star" />
                <div>{stay.reviewScores.Rating} ·  </div>

                <span className="reviews-count-span">{stay.reviews.length} reviews</span>

            </div>

        </div>
        <FormReserve stay={stay} />
    </div>
}