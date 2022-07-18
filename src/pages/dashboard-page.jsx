
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { DashboardReservations } from "../cmps/dashboard-cmps/dashboard-reservations"
import { DashboardTrips } from "../cmps/dashboard-cmps/dashboard-trips"
import { UserStats } from "../cmps/dashboard-cmps/user-stats"
import { DashboardWishlist } from "../cmps/dashboard-cmps/dashboard-wishlist"
import { DashboardListings } from "../cmps/dashboard-cmps/dashboard-listings"
import { setVisitPage } from "../store/actions/system.action"

export const DashboardPage = () => {

    const { user } = useSelector(sotreState => sotreState.userModule)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setVisitPage('dashboard-page'))
    }, [])

    return <section className="dashboard-page full main-layout">

        {user?.isHost && <UserStats />}
        <main className="main-dashboard">

            <Switch>
                <Route path="/dashboard/trip" component={DashboardTrips} />
                <Route path="/dashboard/wishlist" component={DashboardWishlist} />
                <Route path="/dashboard/listings" component={DashboardListings} />
                <Route path="" component={DashboardReservations} />
            </Switch>



        </main>


    </section>
}