
import { CarouselComponent } from "./explore-cmps/carousel.component";
import { utilService } from '../services/util.service';
import starSvg from '../assets/svg/star.svg'
import heartGreySvg from '../assets/svg/heart-grey.svg'
import heartPinkSvg from '../assets/svg/heart-pink.svg'

export const StayPreview = ({ stay, history, onToggleInWishList, checkIsInWishList }) => {

    return <div className="stay-preview flex direction-column">
        <div className="preview-imgs-container">
            {checkIsInWishList(stay._id) ?
                <img className={'heart-svg'} onClick={(ev) => onToggleInWishList(ev, stay._id)} src={heartPinkSvg} />
                :
                <img className={'heart-svg'} onClick={(ev) => onToggleInWishList(ev, stay._id)} src={heartGreySvg} />}

            <CarouselComponent stayImgUrls={stay.imgUrls} stayId={stay._id} history={history} />
        </div>
        <div className="preview-details-container">
            <h4 className="preview-country-city">{stay.address.city}, {stay.address.country}</h4>
            <p className="preview-room-type">{stay.roomType}</p>
            <p className="preview-beds">{utilService.checkForPlurals('bed', stay.beds)}</p>
            <div className="preview-rating-container flex align-center space-between">
                <p className="preview-rating">{stay.reviewScores.Rating.toFixed(1)}</p>
                <img className="star-svg" src={starSvg} />
            </div>
            <p className="preview-price"><span className="price-span">${utilService.getPriceWithCommas(stay.price)}</span> night</p>
        </div>
    </div >
}