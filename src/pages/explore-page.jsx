import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { StayList } from "../cmps/stay-list"
import { StayFilter } from '../cmps/explore-cmps/stay-filter'

import { loadStays } from "../store/actions/stay.action"
import { eventBusService } from "../services/event-bus.service"

export const ExplorePage = () => {

    const dispatch = useDispatch()
    const { stays } = useSelector(storeState => storeState.stayModule)

    useEffect(() => {
        eventBusService.emit('enter-explore',false)
        dispatch(loadStays())
        return ()=>{
            eventBusService.emit('enter-explore',true) 
        }
    }, [])


    return <section className="home-page">
        <StayFilter />
        <StayList stays={stays} />
    </section>
}