import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setFilterBy } from '../../store/actions/stay.action'
import { SearchCountry } from './search-country'
import { AddGuest } from '../general-cmps/add-guest'
import { SearchbarDatePicker } from '../app-header-cmps/searchbar-date-picker'
import { utilService } from '../../services/util.service'
import _ from 'lodash'
import searchSvg from '../../assets/svg/magnifying-glass-big.svg'

export const StaySearchExpand = ({ setModalOpen, modalOpen, isBig, setIsBig, history, setSearchToggle, isSearchOpen }) => {

    const dispatch = useDispatch()

    const { reserve } = useSelector(storeState => storeState.reserveModule)
    const { filterBy } = useSelector(storeState => storeState.stayModule)
    const [activeDatesTab, setActiveTab] = useState('check-in')

    const [searchByFields, handleChange, setSearchByFields] = useForm(filterBy.searchBy)

    const onSearchBy = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        dispatch(setFilterBy('searchBy', searchByFields))
        setSearchToggle(false)
        console.log('SearchByFields DATEDS BEFORE QUERY', searchByFields.dates)
        history.push(`/explore/?location=${searchByFields.location}&dates=${JSON.stringify(searchByFields.dates)}&guests=${searchByFields.guestsNum}`)
    }

    const onSelectedRegion = (region) => {
        setSearchByFields((prevState) => ({ ...prevState, location: region }))
    }

    const onSetModal = (ev, modal) => {
        ev.stopPropagation()
        if (modal === modalOpen) return
        setModalOpen(modal)
        setIsBig(true)
    }


    const { dates, guests } = reserve

    return <section className={`stay-search-expand ${isSearchOpen ? '' : 'close'}`}>
        <form onSubmit={onSearchBy}>
            <div className="stay-search-expand-container flex space-between align-center">

                <div onClick={(ev) => onSetModal(ev, 'location')} 
                className={`search-location-expand ${modalOpen === 'location' ? 'open' : ''}`}>
                    <div className='search-label'>Where</div>
                    <input type="text" placeholder="Search destinations" name='location' value={searchByFields.location} onChange={handleChange} />
                    {modalOpen === 'location' && <SearchCountry selectedRegion={searchByFields.location} setSelectedRegion={onSelectedRegion} />}
                </div>

                <div onClick={(ev) => onSetModal(ev, 'dates')} 
                className={`search-date-expand ${modalOpen === 'dates' ? 'open' : ''}`}>
                    {modalOpen === 'dates' ?
                        <SearchbarDatePicker dates={dates} setModalOpen={setModalOpen} activeDatesTab={activeDatesTab} setActiveTab={setActiveTab} setSearchByFields={setSearchByFields} />
                        :
                        <React.Fragment>
                            <div className='search-label'>When</div>
                            <span>{dates.checkOut ? dates.checkIn.toString().substring(4, 10) + '-' + dates.checkOut.toString().substring(4, 10) : 'Any week'}</span>
                        </React.Fragment>
                    }
                </div>

                <div onClick={(ev) => onSetModal(ev, 'guest')} 
                className={`search-guest-expand ${modalOpen === 'guest' ? 'open' : ''} flex space-between align-center`}>
                    
                    <div>
                        <div className='search-label'>Who</div>
                        <span>{guests.total > 1 ? utilService.checkForPlurals('guest', guests.total) : 'Add guest'}</span>
                    </div>

                    <div onClick={onSearchBy} className={`search-btn-container src-btn-${isBig ? 'big' : 'small'}-expand`}>
                        <div className="btn-container">
                            {_.times(99, (i) => <div key={i} className="cell"></div>)}
                            <div className="content">
                                <button className="action-btn ">
                                    <img src={searchSvg} alt="search-btn" /><span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {modalOpen === 'guest' && <div className="search-modal guest-container">
                        <AddGuest setSearchByFields={setSearchByFields} guests={guests} isInSearch={true} />
                    </div>}

                </div>
            </div>
        </form>

    </section >
}