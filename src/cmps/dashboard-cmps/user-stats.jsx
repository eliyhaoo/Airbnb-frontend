import { useEffect } from "react"

import envelopeSvg from "../../assets/svg/open-reservations.svg"
import coinSvg from "../../assets/svg/income-coin.svg"
import starSvg from "../../assets/svg/star.svg"
import heartSvg from "../../assets/svg/heart.svg"

export const UserStats = () => {
    return <div className="user-stats">

        <div className="stats-container flex space-between align-center">
            <div className="stats-info-container flex direction-column">
                <div className="stats-title">This month income</div>
                <div >
                    <span className="price-span">$13,420</span><span className="precentage-span">+67%</span>
                </div>
            </div>
            <div className="stats-img-container">
                <img src={coinSvg} alt="coin" />
            </div>
        </div>

        <div className="stats-container flex space-between align-center">
            <div className="stats-info-container flex direction-column">
                <div className="stats-title">Added to wishlist</div>
                <div >
                    <span className="price-span">67</span><span className="precentage-span">+18%</span>
                </div>
            </div>
            <div className="stats-img-container">
                <img src={heartSvg} alt="heart" />
            </div>
        </div>

        <div className="stats-container flex space-between align-center">
            <div className="stats-info-container flex direction-column">
                <div className="stats-title">New Messages</div>
                <div >
                    <span className="price-span">35</span>
                    {/* <span className="precentage-span">+53%</span> */}
                </div>
            </div>
            <div className="stats-img-container">
                <img src={envelopeSvg} alt="envelope" />
            </div>

        </div>

        <div className="stats-container flex space-between align-center">
            <div className="stats-info-container flex direction-column">
                <div className="stats-title">Rating</div>
                <div >
                    <span className="price-span">4.9</span><span className="precentage-span">+12%</span>
                </div>
            </div>
            <div className="stats-img-container">
                <img src={starSvg} alt="star" />
            </div>
        </div>





    </div>
}