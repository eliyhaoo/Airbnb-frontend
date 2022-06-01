import { useState } from 'react'
import { LongTxt } from '../long-txt'




export const ReviewPreview = ({ review }) => {

    return <div className="review">

        <div className="review-user-info">
            <img src={review.by.imgUrl} alt="profile picture" />
            <h2>{review.by.fullname}</h2>
            <span>date</span>
        </div>

        <LongTxt txt={review.txt} maxLength={100} />


    </div>



}