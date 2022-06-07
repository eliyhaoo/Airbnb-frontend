
import { utilService } from '../../services/util.service'
import { LongTxt } from '../long-txt'

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

        <div className="stay-description">
            <LongTxt txt={stay.summary} maxLength={200} />
        </div>


    </section>
}