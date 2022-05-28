import { useState } from 'react'

export const ReviewPreview = ({ review }) => {

    const [isLongTxtShown, setLongTxt] = useState(false)

    const toogleShowTxt = () => {
        setLongTxt(!isLongTxtShown)
    }

    return <div className="review">

        <div className="review-user-info">
            <img src={review.by.imgUrl} alt="profile picture" />
            <h2>{review.by.fullname}</h2>
        </div>

        <p>{(isLongTxtShown) ? review.txt : review.txt.slice(0, 200).trim() + ((review.txt.length > 100) ? '...' : '')}</p>
        {(review.txt.length > 100) && <span className='btn' onClick={toogleShowTxt}>{isLongTxtShown ? 'Show less' : 'Show more >'}</span>}

    </div>

}