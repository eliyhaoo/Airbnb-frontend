import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddGuest } from '../add-guest'
import { CheckoutDatePicker } from '../checkout-date-picker'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { utilService } from '../../services/util.service'
import _ from 'lodash'


export const FormReserve = ({ stay }) => {

    const { reserve } = useSelector(storeState => storeState.reserveModule)
    const { user } = useSelector(storeState => storeState.userModule)

    const [isModalOpen, setModal] = useState(false)
    const [btnMode, setIsDeley] = useState({ loader: false, reserve: false, btnTxt: "Check availability" })



    const { dates, guests } = reserve
    console.log('reserve', reserve);
    console.log('reserve', dates);

    useEffect(() => {
        console.log('Dates changed');
        calcTotalNights()
    }, [dates.checkOut, guests])


    const onCloseModal = (ev) => {
        ev.stopPropagation()
        setModal(false)
    }

    const onReserve = async () => {
        if (user !== 'guest') {
            try {
                console.log('Resercing...')
                updateReserveFields()
                showSuccessMsg('Your trip was booked')
            } catch (err) {
                console.log('Cannot reserve')
                showErrorMsg('Cannot reserve')
            }
        }
    }

    const updateReserveFields = () => {
        // reserve.stayId = stay._id
        // reserve.userId = user._id
        // reserve.hostId = stay.host._id
        // reserve.totalPrice = calcTotalPrice()

        const Totalprice = calcTotalPrice()


    }

    const calcTotalPrice = () => {
        console.log('Stay price', stay.price);
        console.log('Nights', calcTotalNights());

        return calcTotalNights() * (stay.price * reserve.guests.total)

    }
    const calcTotalNights = () => {
        return (new Date(dates.checkOut) - new Date(dates.checkIn)) / (1000 * 60 * 60 * 24)

    }



    const getGuestsForDisplay = () => {
        const guestsNum = (guests.total - guests.infants)
        const guestsStr = utilService.checkForPlurals('guest', guestsNum)
        const infantsStr = guests.infants > 0 ? utilService.checkForPlurals('infant', guests.infants) : ''
        return ` ${guestsStr} ${infantsStr}`
    }

    const totalNights = calcTotalNights()
    const totalPrice = calcTotalPrice()
    console.log('TOTAL PRICE', totalPrice);


    return <div className="form-reserve">
        <div className="order-data">
            <div className="date-picker flex space-between align-center">
                {/* <div className="date-picker "> */}
                {/* <div className="date-input flex direction-column">
                    <label>CHECK-IN</label>
                    <input placeholder="9/24/2022"></input>

                </div>
                <div className="date-input flex direction-column">
                    <label>CHECKOUT</label>
                    <input placeholder="9/28/2022"></input>

                </div> */}
                <CheckoutDatePicker dates={dates} />
            </div>

            <div className="guest-input flex direction-column" onClick={() => setModal(true)}>
                <label>GUESTS</label>
                {/* <input placeholder={getGuestsForDisplay()}></input> */}
                <input placeholder={getGuestsForDisplay()}></input>

                <div className={`add-guest-reserve ${isModalOpen ? 'open' : ''} `}>
                    {/* {isModalOpen && <div className="screen guest-open" onClick={() => setModal(false)}></div>} */}
                    <AddGuest onCloseModal={onCloseModal} guests={reserve.guests} />
                </div>
            </div>
        </div>


        <div onClick={onReserve} className="btn-container">
            {_.times(99, (i) => <div key={i} className="cell"></div>)}
            <div className="content">
                <button className="action-btn">
                    <span>Check availability</span>
                </button>
            </div>

        </div>

        <p>You won't be charged yet</p>

        {totalPrice > 0 && <React.Fragment>

            <div className='order-summary-container'>

                <div className="summary-details flex space-between">
                    <div className="summary-label">{`${stay.price} x ${utilService.checkForPlurals('night', totalNights)}`}</div>
                    <div className="summary-total">${utilService.getPriceWithCommas(totalPrice)}</div>
                </div>
                <div className="summary-details flex space-between">
                    <div className="summary-label">cleaning fee</div>
                    <div className="summary-total">$149</div>
                </div>
                <div className="summary-details flex space-between">
                    <div className="summary-label">service fee</div>
                    <div className="summary-total">$0</div>
                </div>

            </div>

            <div className="total-price flex space-between">
                <div>Total Price</div>
                <div >${utilService.getPriceWithCommas(totalPrice + 149)}</div>
            </div>
        </React.Fragment>

        }
    </div >
}