import { Link } from "react-router-dom";
import { CarouselComponent } from "./explore-cmps/carousel.component";
export const StayPreview = ({ stay }) => {
    return <Link to={`/stay/${stay._id}`}><div className="stay-preview flex direction-column">
        <CarouselComponent stayImgUrls={stay.imgUrls} />
        <div className="preview-details-container">
            <p className="preview-country-city">{stay.address.city}, {stay.address.country}</p>
            <p className="preview-room-type">{stay.roomType}</p>
            <p className="preview-beds">{stay.beds} beds</p>
            <p className="preview-rating">{stay.reviewScores.rating}★</p>
            <p className="preview-price"><span className="price-span">${stay.price}</span> night</p>
        </div>
    </div></Link>
}