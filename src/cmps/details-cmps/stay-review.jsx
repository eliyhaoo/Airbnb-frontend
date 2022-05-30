import { ReviewList } from "../details-cmps/review-list"
import { AddReview } from './add-review'

import starSvg from '../../assets/svg/star.svg'

export const StayReview = ({ stay }) => {


    return <section className="stay-review">
        <div className="reviews-stats-header">
            {/* <div> */}
            {/* <span>★</span> */}
            <span><img src={starSvg} alt="star" /></span>
            <span>{stay.reviewScores.rating}</span>
            <span>·</span>
            <span>{stay.reviews.length} </span>
            {/* </div> */}
            <span> reviews</span>
        </div>

        <div className="reviews-stats-container">
            <div className="reviews-stats">
                <div className="review-cleanliness">Cleanliness</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.cleanliness} max="5"></meter></div>
                    <div>{stay.reviewScores.cleanliness.toFixed(1)}</div>
                </div>
            </div>

            <div className="reviews-stats">
                <div className="review-accurcay">Accuracy</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.accuracy} max="5"></meter></div>
                    <div>{stay.reviewScores.accuracy.toFixed(1)}</div>
                </div>
            </div>

            <div className="reviews-stats">
                <div className="review-communication">Communication</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.communication} max="5"></meter></div>
                    <div>{stay.reviewScores.communication.toFixed(1)}</div>
                </div>
            </div>

            <div className="reviews-stats">
                <div className="review-location">Location</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.location} max="5"></meter></div>
                    <div>{stay.reviewScores.location.toFixed(1)}</div>
                </div>
            </div>

            <div className="reviews-stats">
                <div className="review-checkin">Check-in</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.checkin} max="5"></meter></div>
                    <div>{stay.reviewScores.checkin.toFixed(1)}</div>
                </div>
            </div>

            <div className="reviews-stats">
                <div className="review-value">Value</div>
                <div className="review-rates-container flex space-between ">
                    <div><meter value={stay.reviewScores.value} max="5"></meter></div>
                    <div>{stay.reviewScores.value.toFixed(1)}</div>
                </div>
            </div>


        </div>
        <ReviewList stay={stay} />


        <AddReview stay={stay} />

    </section>


}