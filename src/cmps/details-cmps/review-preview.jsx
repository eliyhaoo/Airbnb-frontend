import { LongTxt } from '../long-txt'
import { utilService } from '../../services/util.service'



export const ReviewPreview = ({ review }) => {
    const date = new Date(review.at)
    return <div className="review">

        <div className="review-user-info">
            <img src={review.by.imgUrl} alt="profile picture" />
            <div className="flex direction-column">
                <h4>{review.by.fullname}</h4>
                <span className="review-date">{utilService.getMonthName(date)} {date.getFullYear()}</span>
            </div>
        </div>

        <LongTxt txt={review.txt} maxLength={100} />


    </div>



}