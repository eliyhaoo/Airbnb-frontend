
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { DashboardHeader } from "../cmps/dashboard-cmps/dashboard-header"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import { DashboardReservations } from "../cmps/dashboard-cmps/dashboard-reservations"
import { DashboardTrips } from "../cmps/dashboard-cmps/dashboard-trips"
import { UserStats } from "../cmps/dashboard-cmps/user-stats"
import { StayList } from '../cmps/stay-list'
import reactRouterDom from "react-router-dom"
import { loadStays } from '../store/actions/stay.action'
import { DashboardWishlist } from "../cmps/dashboard-cmps/dashboard-wishlist"
import { DashboardListings } from "../cmps/dashboard-cmps/dashboard-listings"
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
// } from "react-router-dom";
export const DashboardPage = (props) => {

    const { stays } = useSelector(storeState => storeState.stayModule)

    const user = {
        _id: '622f3403e36c58e6164naf93',
        imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
        isHost: true,
        wishList: ['6297cb852f760e2ec9f8244b']
    }

    // const { user } = useSelector(storeState => storeState.userModule)


    useEffect(() => {
        // dispatch(loadStays())
        console.log(stays)
        dispatch(setVisitPage('dashboard-page'))
    }, [])



    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setVisitPage('dashboard-page'))
        if (!user.isHost) {

            // props.history.push('/dashboard/trip')
        }

    }, [])


    return <section className="dashboard-page full main-layout">

        <DashboardHeader user={user} />
        <UserStats />

        <main className="main-dashboard">


            <Switch>
                {/* <Route path="/dashboard/" component={DashboardTrips} /> */}
                {/* <Route path="/dashboard/" exact component={DashboardWishlist} /> */}
                <Route path="/dashboard/" component={DashboardReservations} />
                {/* <Route path="/dashboard" component={DashboardListings} /> */}
            </Switch>



        </main>

    </section>
}