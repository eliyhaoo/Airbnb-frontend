import { useSelector } from 'react-redux'
import searchSvg from '../assets/svg/magnifying-glass.svg'

import { utilService } from '../services/util.service'
export const StaySearch = ({ setModalOpen, setSearchToggle, setIsBig }) => {

    const { filterBy } = useSelector(storeState => storeState.stayModule)

    const onSetModalOpen = (ev, modal) => {
        ev.stopPropagation()
        setModalOpen(modal)
        setSearchToggle(true)
        setIsBig(true)
    }

    const { searchBy: { location, dates, guestsNum } } = filterBy

    const getDatesToDisplay = () => {

        return dates.checkIn.toString().substring(4, 10) + '-' + dates.checkOut.toString().substring(4, 10)
    }

    return <section className="stay-search flex space-between align-center">
        <button onClick={(ev) => onSetModalOpen(ev, 'location')} className="search-location">
            {location ? location : 'Anywhere'}
        </button>
        <button onClick={(ev) => onSetModalOpen(ev, 'dates')} className="search-date">
            {dates ? getDatesToDisplay() : 'Anyweek'}
        </button>
        <div onClick={(ev) => onSetModalOpen(ev, 'guest')} className="search-guest">
            <div className="search-guest-container flex space-between align-center">
                <div className="search-guest-btn">
                    {guestsNum ? utilService.checkForPlurals('guest', guestsNum) : 'Add guests'}

                </div>
                <button className="search-btn flex align-center" ><img src={searchSvg} alt="btn" /> </button>
            </div>
        </div>
    </section>
}