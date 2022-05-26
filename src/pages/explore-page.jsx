import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-list"
import { StayFilter } from '../cmps/explore-cmps/stay-filter'

import { loadStays } from "../store/actions/stay.action"
import { setIsInHomePage } from "../store/actions/system.action"

export const ExplorePage = () => {
    const dispatch = useDispatch()
    const { stays } = useSelector(storeState => storeState.stayModule)
    const [isModalOpen, showFilterModal] = useState(false)

    useEffect(() => {
        dispatch(loadStays())
        dispatch(setIsInHomePage(false))

    }, [])

    // const className = isModalOpen ? 'explore-page screen' : 'explore-page'
    return <section className="explore-page">
        <button onClick={() => showFilterModal(true)} className="filter-btn">Filters</button>
        {isModalOpen && <StayFilter showFilterModal={showFilterModal} />}
        <StayList stays={stays} />

    </section>
}