

import { ReviewList } from "../details-cmps/review-list"
import { AddReview } from './add-review'

export const StayReview = ({ stay }) => {



    return <section className="stay-review">
        <div className="reviews-stats-header">
            ★{stay.reviewScores.rating}·{stay.reviews.length}
        </div>

        <div className="reviews-stats-container">
            <div className="reviews-stats">
                <div className="review-cleanliness">Cleanliness</div>
                <div>{stay.reviewScores.cleanliness}</div>
            </div>

            <div className="reviews-stats">
                <div className="review-communication">Communication</div>
                <div>{stay.reviewScores.communication}</div>
            </div>

            <div className="reviews-stats">
                <div className="review-checkin">Check-in</div>
                <div>{stay.reviewScores.checkin}</div>
            </div>

            <div className="reviews-stats">
                <div className="review-accurcay">Accuracy</div>
                <div>{stay.reviewScores.accuracy}</div>
            </div>

            <div className="reviews-stats">
                <div className="review-location">Location</div>
                <div>{stay.reviewScores.location}</div>
            </div>

            <div className="reviews-stats">
                <div className="review-value">Value</div>
                <div>{stay.reviewScores.value}</div>
            </div>

        </div>
        <ReviewList stay={stay} />


        <AddReview stay={stay} />

    </section>


}