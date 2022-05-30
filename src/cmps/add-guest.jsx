
import plusSvg from '../assets/svg/plus.svg'
import minusSvg from '../assets/svg/minus.svg'

export const AddGuest = () => {
    return <section className="add-guest">

        <div className="guest-inputs flex direction-column">

            <div className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">Adults</div>
                    <div className="count-input-subtitle">Age 13+</div>
                </div>
                <div className="count-container flex space-between">
                    <button>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>1</div>
                    <button>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>

            <div className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">Children</div>
                    <div className="count-input-subtitle">Age 2-12</div>
                </div>
                <div className="count-container flex space-between">
                    <button>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>1</div>
                    <button>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>

            <div className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">Infants</div>
                    <div className="count-input-subtitle">Under 2</div>
                </div>
                <div className="count-container flex space-between">
                    <button>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>1</div>
                    <button>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>

            <div className="guest-input-container flex space-between align-center">
                <p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>
            </div>

            <div>
                <button>Close</button>
            </div>

        </div>
    </section>
}