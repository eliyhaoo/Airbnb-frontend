
import { useState } from "react";
import { CarouselComponent } from "./explore-cmps/carousel.component";
import { utilService } from '../services/util.service';
import starSvg from '../assets/svg/star.svg'
import heartSvg from '../assets/svg/heart.svg'


export const StayPreview = ({ stay, history }) => {
    const [inWishList, setStayToWishList] = useState('')

    const onAddStayToWishList = (ev) => {
        ev.stopPropagation()
        console.log('ev', ev)
        inWishList ? setStayToWishList('') : setStayToWishList('active')
    }

    return <div className="stay-preview flex direction-column">
        <div className="preview-imgs-container">
            <img className={('heart-svg' + ' ' + inWishList)} onClick={onAddStayToWishList} src={heartSvg} />
            <CarouselComponent stayImgUrls={stay.imgUrls} stayId={stay._id} history={history} />
        </div>
        <div className="preview-details-container">
            <p className="preview-country-city">{stay.address.city}, {stay.address.country}</p>
            <p className="preview-room-type">{stay.roomType}</p>
            <p className="preview-beds">{utilService.checkForPlurals('bed', stay.beds)}</p>
            <div className="preview-rating-container flex align-center space-between">
                <p className="preview-rating">{stay.reviewScores.Rating}</p><img className="star-svg" src={starSvg} />
            </div>
            <p className="preview-price"><span className="price-span">${utilService.getPriceWithCommas(stay.price)}</span> night</p>
        </div>
    </div >
}