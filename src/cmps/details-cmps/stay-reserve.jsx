import { useEffect } from "react"
import { useSelector } from "react-redux"

export const StayReserve = ({ stay }) => {

    // const { stay } = useSelector(storeState => storeState.stayModule)
    // useEffect(() => {
    //     console.log('staystaystaystay', stay)
    // }, [stay])

    if (!stay) return <div>Loading...</div>
    return <div className="stay-reserve">
        <p className="stay-reserve-price"><span className="price-span">${stay.price}</span> night</p>
        <p className="preview-rating">★{stay.reviewScores.rating} · <span className="reviews-count-span">{stay.reviews.length} reviews</span></p>


    </div>
}