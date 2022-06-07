import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AddGuest } from '../add-guest'
import { CheckoutDatePicker } from '../checkout-date-picker'
import { showSuccessMsg, showErrorMsg, showReservedMsg } from '../../services/event-bus.service.js'
import { utilService } from '../../services/util.service'
import _ from 'lodash'
import { reservationService } from '../../services/reservation.service'
import { socketService, SOCKET_EMIT_RESERVATION } from '../../services/socket.service'
import dropDownSvg from '../../assets/svg/arrow-down.svg'

export const FormReserve = ({ stay }) => {

    const { reserve } = useSelector(storeState => storeState.reserveModule)
    const { user } = useSelector(storeState => storeState.userModule)

    const [isModalOpen, setModal] = useState(false)
    const [btnMode, setIsDeley] = useState({ loader: false, reserve: false, btnTxt: "Check availability" })

    const { dates, guests } = reserve

    const onCloseModal = (ev) => {
        ev.stopPropagation()
        setModal(false)
    }

    const toggleModal = (ev) => {
        ev.stopPropagation()
        setModal(prevState => !prevState)
    }

    const onReserve = async () => {
        if (user !== 'guest') {

            try {
                const updatedReservation = updateReserveFields()
                console.log('RESERVATIONS TPO SEND ', updatedReservation)
                await reservationService.save(updatedReservation)
                socketService.emit(SOCKET_EMIT_RESERVATION, updatedReservation)
                showReservedMsg('Your trip was booked')
            } catch (err) {
                console.log('Cannot reserve')
                showErrorMsg('Cannot reserve')
            }
        }
    }

    const updateReserveFields = () => {
        return {
            ...reserve,
            stayId: stay._id,
            hostId: stay.host._id,
            totalPrice: calcTotalPrice()
        }
    }

    const calcTotalPrice = () => {
        console.log('Stay price', stay.price);
        console.log('Nights', calcTotalNights());

        return calcTotalNights() * stay.price

    }

    const calcTotalNights = () => {
        return (new Date(dates.checkOut) - new Date(dates.checkIn)) / (1000 * 60 * 60 * 24)
    }

    const getGuestsForDisplay = () => {
        const guestsNum = (guests.total - guests.infants)
        const guestsStr = utilService.checkForPlurals('guest', guestsNum)
        const infantsStr = guests.infants > 0 ? utilService.checkForPlurals('infant', guests.infants) : ''
        return `${guestsStr} ${infantsStr}`
    }

    const totalNights = calcTotalNights()
    const totalPrice = calcTotalPrice()
    console.log('TOTAL PRICE', totalPrice)

    return <div className="form-reserve">
        <div className="order-data">
            <div className="date-picker flex space-between align-center">

                <CheckoutDatePicker dates={dates} />
            </div>

            <div className="guest-input flex space-between align-center" onClick={() => setModal(true)}>
                <div className="flex direction-column">
                    <label>GUESTS</label>

                    <input placeholder={getGuestsForDisplay()}></input>
                </div>
                <div className={"img-container"} >
                    <img className={isModalOpen ? 'open' : ''} src={dropDownSvg} onClick={toggleModal} />
                </div>
                <div className={`add-guest-reserve ${isModalOpen ? 'open' : ''} `}>
                    <AddGuest onCloseModal={onCloseModal} guests={reserve.guests} />
                </div>
            </div>
        </div>

        <div onClick={onReserve} className="btn-container">
            {_.times(99, (i) => <div key={i} className="cell"></div>)}
            <div className="content">
                <button className="action-btn">
                    <span>Reserve</span>
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
                    <div className="summary-label">Cleaning fee</div>
                    <div className="summary-total">$149</div>
                </div>
                <div className="summary-details flex space-between">
                    <div className="summary-label">Service fee</div>
                    <div className="summary-total">$0</div>
                </div>

            </div>

            <div className="total-price flex space-between">
                <div>Total</div>
                <div >${utilService.getPriceWithCommas(totalPrice + 149)}</div>
            </div >
        </React.Fragment >

        }
    </div >
}