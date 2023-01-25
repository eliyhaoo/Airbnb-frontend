
import { utilService } from "../../services/util.service"
import starSvg from '../../assets/svg/star.svg'

export const StayHeaderInfo = ({ stay }) => {

    return <div className="stay-review-details flex">
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
}