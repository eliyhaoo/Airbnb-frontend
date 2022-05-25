import { Link } from "react-router-dom";

export const StayPreview = ({ stay }) => {
    return <div className="stay-preview flex direction-column">

        Name: {stay.name}
        <img src={stay.imgUrls[0]} alt="house" />
        <Link to={`/stay/${stay._id}`}>bye</Link>

    </div>
}