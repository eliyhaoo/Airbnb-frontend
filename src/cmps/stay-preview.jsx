import starSvg from '../assets/svg/star.svg'
import { Link } from "react-router-dom";
import { CarouselComponent } from "./explore-cmps/carousel.component";
export const StayPreview = ({ stay, history }) => {

    const getPriceWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (!stay) return <div>Loading...</div>
    return <div className="stay-preview flex direction-column">
        <CarouselComponent stayImgUrls={stay.imgUrls} stayId={stay._id} history={history} />
        <Link to={`/stay/${stay._id}`}><div className="preview-details-container">
            <p className="preview-country-city">{stay.address.city}, {stay.address.country}</p>
            <p className="preview-room-type">{stay.roomType}</p>
            <p className="preview-beds">{stay.beds} beds</p>
            <div className="preview-rating-container flex align-center space-between">
                <p className="preview-rating">{stay.reviewScores.rating}</p><img className="star-svg" src={starSvg} />
            </div>
            <p className="preview-price"><span className="price-span">{getPriceWithCommas(stay.price)}</span> night</p>
        </div></Link>
    </div >
}