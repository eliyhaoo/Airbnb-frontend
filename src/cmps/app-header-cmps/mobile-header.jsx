import { useState } from 'react'
import searchSvg from '../../assets/svg/blacksearchsvg.svg'
import filterImg from '../../assets/svg/filter.svg'
import { StayFilter } from '../explore-cmps/stay-filter'
export const MobileHeader = () => {

    const [isFilterOpen, setFilterModal]=useState(false)

    return <section className="mobile-header">
        <form>
            <div className="mobile-search-container flex space-between align-center">

                <div className="search-box-container flex space-between gap-8">

                    <button type='submit' className="mobile-search-btn">
                        <img src={searchSvg} alt="search" />
                    </button>

                    <div className="search-input flex direction-column space-between">
                        <div className="search-label">Where to?</div>
                        <input type="search" placeholder='Anywhere' />
                    </div>

                </div>

                <button type="button" onClick={()=>{setFilterModal(true)}} className="mobile-filter-btn">
                    <img className="mobile-filter-svg" src={filterImg} alt="filter" />
                </button>

            </div>
        </form>
        {isFilterOpen && <StayFilter setFilterModal={setFilterModal}/>}

    </section>
}