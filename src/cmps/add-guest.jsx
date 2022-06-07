import { useEffect, useState } from 'react'

import plusSvg from '../assets/svg/plus.svg'
import minusSvg from '../assets/svg/minus.svg'
import { useDispatch, useSelector } from 'react-redux'
import { updateReserve } from '../store/actions/reserve.action'


export const AddGuest = ({ setSearchByFields, onCloseModal, guests }) => {

    const dispatch = useDispatch()
    const { reserve } = useSelector(storeState => storeState.reserveModule)


    const [guestsFields, setGuests] = useState(guests)


    const onUpdateGuests = (field, diff) => {
        const newGuests = { ...guestsFields, [field]: guestsFields[field] + diff, total: guestsFields.total + diff }
        setGuests(newGuests)
        dispatch(updateReserve('guests', newGuests))
        if (setSearchByFields) setSearchByFields((prevState) => ({ ...prevState, guestsNum: newGuests.total }))
    }


    const { adults, childrens, infants } = guestsFields

    return <section className="add-guest">

        <div className="guest-inputs flex direction-column">

            <div className="guest-input-container flex space-between align-center">
                <div className="flex direction-column">
                    <div className="count-input-title">Adults</div>
                    <div className="count-input-subtitle">Ages 13 or above</div>
                </div>

                <div className="count-container flex space-between">
                    <button className="add-guest-decerase-btn disbaled" type='button' onClick={() => onUpdateGuests('adults', -1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{adults}</div>
                    <button className="add-guest-decerase-btn" type='button' onClick={() => onUpdateGuests('adults', +1)}>
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
                    <button className="add-guest-decerase-btn disbaled" type='button' onClick={() => onUpdateGuests('childrens', -1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{childrens}</div>
                    <button className="add-guest-decerase-btn" type='button' onClick={() => onUpdateGuests('childrens', +1)}>
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
                    <button className="add-guest-decerase-btn disbaled" type='button' onClick={() => onUpdateGuests('infants', -1)}>
                        <div className="count-btn-container"> <img src={minusSvg} alt="minus" /></div>
                    </button>
                    <div>{infants}</div>
                    <button className="add-guest-decerase-btn" type='button' onClick={() => onUpdateGuests('infants', +1)}>
                        <div className="count-btn-container"><img src={plusSvg} alt="plus" /></div>
                    </button>
                </div>
            </div>

            <div className="guest-input-container flex space-between align-center">
                <p>This place has a maximum of 10 guests, not including infants. Pets aren't allowed.</p>
            </div>

            <div className="btn-close">
                <button onClick={onCloseModal}>Close</button>
            </div>

        </div>
    </section>
}