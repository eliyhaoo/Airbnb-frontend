
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { Route, Switch } from "react-router-dom"
import { DashboardReservations } from "../cmps/dashboard-cmps/dashboard-reservations"
import { DashboardTrips } from "../cmps/dashboard-cmps/dashboard-trips"
import { UserStats } from "../cmps/dashboard-cmps/user-stats"
import { DashboardWishlist } from "../cmps/dashboard-cmps/dashboard-wishlist"
import { DashboardListings } from "../cmps/dashboard-cmps/dashboard-listings"

export const DashboardPage = (props) => {

    const { stays } = useSelector(storeState => storeState.stayModule)

    // const user = {
    //     _id: '622f3403e36c58e6164naf93',
    //     imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
    //     isHost: true,
    //     wishList: ['6297cb852f760e2ec9f8244b']
    // }

    const { user } = useSelector(storeState => storeState.userModule)


    useEffect(() => {
        // dispatch(loadStays())
        console.log(stays)
        dispatch(setVisitPage('dashboard-page'))
    }, [])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setVisitPage('dashboard-page'))
        if (!user?.isHost) {
            // props.history.push('/dashboard/trip')
        }
    }, [])

    return <section className="dashboard-page full main-layout">
       
        <UserStats />
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