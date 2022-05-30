
import { utilService } from "../../services/util.service"

export const StayInfo = ({ stay }) => {
    return <section className="stay-info-container">

        <div className="stay-info">
            <div>
                <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                <span>
                    {utilService.checkForPlurals('guest', stay.guests)}
                    <span className="dot">·</span>
                    {utilService.checkForPlurals('bedroom', stay.bedrooms)}
                    <span className="dot">·</span>
                    {utilService.checkForPlurals('bed', stay.beds)}
                    <span className="dot">·</span>
                    {utilService.checkForPlurals('bath', stay.bath)}
                </span>
            </div>
            <img src={stay.host.thumbnailUrl} alt="profile" />
        </div>

        <div className="air-cover">
            <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" />
            <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
        </div>

        <div className="stay-description">
            <p>{stay.summary}</p>
        </div>


    </section>
}