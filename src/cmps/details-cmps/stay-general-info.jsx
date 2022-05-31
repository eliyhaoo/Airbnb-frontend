import CheckIn from '../../assets/svg/check-in experience.svg'
import Friends from '../../assets/svg/Furry friends.svg'
import Cancellation from '../../assets/svg/cancellation.svg'

export const StayGeneralInfo = () => {

    return <section className="stay-general-info">

        <div className="general-info-container flex">
            <img src={CheckIn} alt="check-in experience" />
            <div className="general-info flex direction-column">
                <div className="title">Great check-in experience</div>
                <div className="subtitle">95% of recent guests gave the check-in process a 5-star rating.</div>
            </div>
        </div>

        <div className="general-info-container flex">
            <img src={Friends} alt="Furry friends" />
            <div className="general-info flex direction-column">
                <div className="title">Furry friends welcome</div>
                <div className="subtitle">Bring your pets along for the stay.</div>
            </div>
        </div>

        <div className="general-info-container flex">
            <img src={Cancellation} alt="cancellation" />
            <div className="general-info flex ">
                <div className="title">Free cancellation before Sep 23.</div>
            </div>
        </div>

        <div className="air-cover">
            <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="aircover" />
            <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
        </div>

    </section>

}