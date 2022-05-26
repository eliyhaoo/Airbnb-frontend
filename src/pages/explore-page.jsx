import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-list"
import { StayFilter } from '../cmps/explore-cmps/stay-filter'

import { loadStays } from "../store/actions/stay.action"
import { setIsInHomePage } from "../store/actions/system.action"

export const ExplorePage = () => {

    const dispatch = useDispatch()
    const { stays } = useSelector(storeState => storeState.stayModule)

    useEffect(() => {
        dispatch(loadStays())
        dispatch(setIsInHomePage(false))
  
    }, [])


    return <section className="home-page">
        <StayFilter />
        <StayList stays={stays} />
    </section>
}