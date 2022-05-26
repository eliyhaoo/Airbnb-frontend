
{/* <img className={`img${idx + 1}`} key={idx} src={imgUrl} alt="house" /> */ }

export const ReviewPreview = ({ review }) => {

    return <div className="review">

        <div className="review-user-info">
            <img src={review.by.imgUrl} alt="profile picture" />
            <h2>{review.by.fullname}</h2>
        </div>
        <p>{review.txt}</p>
    </div>

}