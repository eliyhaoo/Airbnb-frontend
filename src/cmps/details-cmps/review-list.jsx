import { useEffect } from "react"
import { ReviewPreview } from "./review-preview"

export const ReviewList = ({ stay }) => {

    useEffect(() => {

    }, [stay.reviews])

    return <div className="review-list">

        {stay.reviews.map(review => <ReviewPreview review={review} stay={stay} key={review.by._id} />)}

    </div>
}