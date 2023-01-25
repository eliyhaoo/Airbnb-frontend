import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchSvg from '../../assets/svg/blacksearchsvg.svg'
import filterImg from '../../assets/svg/filter.svg'
import { setFilterBy } from '../../store/actions/stay.action'
import { StayFilter } from '../explore-cmps/stay-filter'

export const MobileHeader = ({ history }) => {
    const dispatch = useDispatch()
    const [isFilterOpen, setFilterModal] = useState(false)
    const { filterBy } = useSelector(storeState => storeState.stayModule)
    const { visitedPage } = useSelector(storeState => storeState.systemModule)
    const [location, setLocation] = useState('')

    const onSearchBy = (ev) => {
        ev.preventDefault()
        const searchBy = { ...filterBy.searchBy }
        searchBy.location = location
        dispatch(setFilterBy('searchBy', searchBy))
        history.push(`/explore/?location=${location}`)

    }

    const handleChange = ({ target }) => {
        setLocation(target.value)
    }

    return <section className={`mobile-header ${visitedPage === 'home-page' && 'home'}`}>
        <form onSubmit={onSearchBy}>
            <div className="mobile-search-container flex space-between align-center">
                <div className="search-box-container flex space-between gap-8">
                    <button type='submit' className="mobile-search-btn">
                        <img src={searchSvg} alt="search" />
                    </button>
                    <div className="search-input flex direction-column space-between">
                        <div className="search-label">Where to?</div>
                        <input type="search" placeholder='Anywhere' onChange={handleChange} value={location} />
                    </div>
                </div>
                <button type="button" onClick={() => { setFilterModal(true) }} className="mobile-filter-btn">
                    <img className="mobile-filter-svg" src={filterImg} alt="filter" />
                </button>
            </div>
        </form>
        {isFilterOpen && <StayFilter setFilterModal={setFilterModal} />}
    </section>
}