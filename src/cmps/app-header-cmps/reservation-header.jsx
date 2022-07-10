import starSvg from '../../assets/svg/star.svg'
import _ from 'lodash'
import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'
import { reservationService } from '../../services/reservation.service'
import { socketService, SOCKET_EMIT_RESERVATION } from '../../services/socket.service'
import { showErrorMsg, showReservedMsg } from '../../services/event-bus.service'

export const ReservationHeader = () => {

    const { stay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const { reserve } = useSelector(storeState => storeState.reserveModule)

    const onReserve = async () => {
        if (user !== 'guest') {
            
            try {
                const updatedReservation = updateReserveFields()
                await reservationService.save(updatedReservation)
                socketService.emit(SOCKET_EMIT_RESERVATION, updatedReservation)
                showReservedMsg('Your trip was booked')
            } catch (err) {
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
        return (new Date(reserve.dates.checkOut) - new Date(reserve.dates.checkIn)) / (1000 * 60 * 60 * 24)
    }

    return <section className="header-reservation">

        <div className="reservation-header-container flex">

            <div className="order-details-container flex direction-column space-between">
                <div className="price-pernight-container">
                    <p className="stay-reserve-price"><span className="price-span">${utilService.getPriceWithCommas(stay.price)}</span> night</p>
                </div>

                <div className="preview-rating flex space-between">
                    <img src={starSvg} alt="star" />
                    <div>{stay.reviewScores.Rating} ·  </div>
                    <span className="reviews-count-span">{stay.reviews.length} reviews</span>
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

        </div>
    </section>
}