import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import filterImg from '../assets/svg/filter.svg'

import { StayList } from "../cmps/stay-list"
import { StayFilter } from '../cmps/explore-cmps/stay-filter'
import { CategoriesFilter } from '../cmps/explore-cmps/categories-filter'

import { loadStays } from "../store/actions/stay.action"
import { setVisitPage } from "../store/actions/system.action"

export const ExplorePage = ({ history }) => {
    const dispatch = useDispatch()
    const { stays } = useSelector(storeState => storeState.stayModule)
    const [isModalOpen, showFilterModal] = useState(false)

    useEffect(() => {
        dispatch(loadStays())
        dispatch(setVisitPage('explore-page'))

    }, [])

    return <section className="explore-page full main-layout">

        <div className="filter-container full main-layout">

            <div className="filter-btns-container flex align-center space-between">
                <CategoriesFilter />
                <button className="filter-btn flex align-center space-between" onClick={() => showFilterModal(true)} ><div className="img-container flex align-center"><img className="filter-img-btn" src={filterImg} /></div>
                    <span>Filters</span>
                </button>
                {isModalOpen && <StayFilter history={history} showFilterModal={showFilterModal} />}
            </div>

        </div>

        <StayList stays={stays} />

    </section >
}