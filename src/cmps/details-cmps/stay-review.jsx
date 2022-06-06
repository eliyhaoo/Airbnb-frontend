import { utilService } from "../../services/util.service"

import { ReviewList } from "../details-cmps/review-list"
import { AddReview } from './add-review'

import { Loader } from "../loader"

import starSvg from '../../assets/svg/star.svg'

export const StayReview = ({ stay }) => {

    if (!stay) return <Loader />

    const reviewScoreKeys = Object.keys(stay.reviewScores)

    return <section className="stay-review">
        <div className="reviews-stats-header">
            <span><img src={starSvg} alt="star" /></span>
            <span>{stay.reviewScores.Rating}</span>
            <span>·</span>
            <span>{utilService.checkForPlurals('review', stay.reviews.length)} </span>
        </div>

        <div className="reviews-stats-container">
            {reviewScoreKeys.map((reviewField, idx) => {
                if (reviewField === 'Rating') return
                return <div key={idx} className="reviews-stats">
                    <div className={`review-${reviewField}`}>{`${reviewField}`}</div>
                    <div className="review-rates-container flex space-between ">
                        <div><meter value={stay.reviewScores[reviewField]} max="5"></meter></div>
                        <span>{stay.reviewScores[reviewField]}</span>
                    </div>
                </div>
            }
            )}
        </div>

        {/* <ReviewList stay={stay} /> */}
        {/* <AddReview stay={stay} /> */}

    </section>


}