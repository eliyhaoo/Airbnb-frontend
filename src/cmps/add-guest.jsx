import { useState } from 'react'

import plusSvg from '../assets/svg/plus.svg'
import minusSvg from '../assets/svg/minus.svg'


export const AddGuest = ({ setModal }) => {

    const [guest, setGuest] = useState(1)
    const [children, setChildren] = useState(0)
    const [infats, setInfats] = useState(0)


    const onChooseGuest = (diff) => {
        setGuest(guest + diff)
    }

    const onChooseChildren = (diff) => {
        setChildren(children + diff)
    }

    const onChooseInfats = (diff) => {
        setInfats(infats + diff)
    }

    return <section className="add-guest">

        <div className="guest-inputs flex direction-column">

            <div className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">Adults</div>
                    <div className="count-input-subtitle">Age 13+</div>
                </div>

                <div className="count-container flex space-between">
                    <button onClick={() => onChooseGuest(-1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{guest}</div>
                    <button onClick={() => onChooseGuest(+1)}>
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
                    <button onClick={() => onChooseChildren(-1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{children}</div>
                    <button onClick={() => onChooseChildren(+1)}>
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
                    <button onClick={() => onChooseInfats(-1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{infats}</div>
                    <button onClick={() => onChooseInfats(+1)}>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>

            <div className="guest-input-container flex space-between align-center">
                <p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>
            </div>

            <div className="btn-close">
                <button onClick={() => setModal(false)}>Close</button>
            </div>

        </div>
    </section>
}