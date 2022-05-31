import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { setFilterBy } from '../store/actions/stay.action'
import { SearchCountry } from './search-country'
import searchSvg from '../assets/svg/searchsvg.svg'
import { AddGuest } from './add-guest'

export const StaySearchExpand = ({ setModalOpen, modalOpen, isBig, setIsBig, history, setSearchToggle }) => {

    const dispatch = useDispatch()
    const { filterBy } = useSelector(storeState => storeState.stayModule)

    const [searchByFields, handleChange, setSearchByFields] = useForm(filterBy.searchBy)



    const onSearchBy = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        dispatch(setFilterBy('searchBy', searchByFields))
        setSearchToggle(false)
        history.push(`/explore/?location=${searchByFields.country}`)
    }

    const onSelectedRegion = (region) => {
        setSearchByFields((prevState) => ({ ...prevState, country: region }))

    }

    const onSetModal = (ev, modal) => {
        ev.stopPropagation()
        setModalOpen(modal)
        setIsBig(true)
    }

    return <section className="stay-search-expand ">
        <form onSubmit={onSearchBy}>
            <div className="stay-search-expand-container flex space-between align-center">
                <div onClick={(ev) => onSetModal(ev, 'location')} className={`search-location-expand ${modalOpen === 'location' ? 'open' : ''}`}>
                    <div>Where</div>
                    <input type="text" placeholder="Search-destinations" name='country' value={searchByFields.country} onChange={handleChange} />
                    {modalOpen === 'location' && <SearchCountry selectedRegion={searchByFields.country} setSelectedRegion={onSelectedRegion} />}

                </div>

                <div onClick={(ev) => onSetModal(ev, 'dates')} className={`search-date-expand ${modalOpen === 'dates' ? 'open' : ''}`}>
                    <div>When</div>
                    <span>Any week</span>

                </div>

                <div onClick={(ev) => onSetModal(ev, 'guest')} className={`search-guest-expand ${modalOpen === 'guest' ? 'open' : ''} flex space-between align-center`}>
                    <div>
                        <div>Who</div>
                        <span>Add guest</span>

                    </div>
                    <div onClick={onSearchBy} className={`search-btn-container src-btn-${isBig ? 'big' : 'small'}-expand`}>

                        <div className="btn-container">
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="cell"></div>
                            <div className="content">
                                <button className="action-btn ">
                                    <img src={searchSvg} alt="search-btn" /><span></span>
                                </button>
                            </div>
                        </div>

                    </div>
                    
                    {/* <div className="add-guest-search-container">
                        {modalOpen === 'guest' && <AddGuest />}
                    </div> */}

                </div>

            </div>
        </form>

    </section >
}