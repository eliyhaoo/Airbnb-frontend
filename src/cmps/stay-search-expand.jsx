import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchSvg from '../assets/svg/searchsvg.svg'
import { useForm } from '../hooks/useForm'
import { setSearchBy } from '../store/actions/stay.action'
import { SearchCountry } from './search-country'

export const StaySearchExpand = ({ setModalOpen, modalOpen, isBig, setIsBig }) => {

    const dispatch = useDispatch()
    const { filterBy } = useSelector(storeState => storeState.stayModule)

    const [selectedRegion, setSelectedRegion] = useState('')

    const [searchByFields, handleChange, setSearchByFields] = useForm(filterBy.searchBy)


    useEffect(() => {

        dispatch(setSearchBy(searchByFields))
    }, [selectedRegion])


    const onSearchBy = (ev) => {
        ev.stopPropagation()
        console.log('HEY FORM', searchByFields);
        ev.preventDefault()
        dispatch(setSearchBy(searchByFields))
    }


    const onSelectedRegion = (region) => {
        setSearchByFields((prevState) => ({ ...prevState, country: region }))
        setSelectedRegion(region)
    }

    const onSetModal = (ev, modal) => {
        console.log('Setting Modal');
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
                    <div  onClick={onSearchBy} className={`search-btn-container src-btn-${isBig ? 'big' : 'small'}-expand`}>

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
                                <button  className="action-btn ">
                                {/* <button className="action-btn "> */}
                                    <img src={searchSvg} alt="search-btn" /><span></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </form>

    </section >
}