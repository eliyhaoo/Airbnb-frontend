import { useState } from 'react'
import { LongTxt } from '../long-txt'
import { utilService } from '../../services/util.service'



export const ReviewPreview = ({ review }) => {
    console.log('reView at',review.at);
    const date = new Date(review.at)
    return <div className="review">

        <div className="review-user-info">
            <img src={review.by.imgUrl} alt="profile picture" />
            <div className="flex direction-column">
                <h2>{review.by.fullname}</h2>
                <span className="review-date">{utilService.getMonthName(date)} {date.getFullYear()}</span>
            </div>
        </div>

        <LongTxt txt={review.txt} maxLength={100} />


    </div>



}