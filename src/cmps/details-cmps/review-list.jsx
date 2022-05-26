import { ReviewPreview } from "./review-preview"

export const ReviewList = ({ stay }) => {

    return <div className="review-list">
        {/* <h2>HELLO FROM REVIEW LIST</h2> */}
        {stay.reviews.map(review => <ReviewPreview review={review} key={review.by._id} />)}

    </div>
}