import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { DashboardHeader } from "../cmps/dashboard-cmps/dashboard-header"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import { DashboardReservations } from "../cmps/dashboard-cmps/dashboard-reservations"
import { DashboardTrips } from "../cmps/dashboard-cmps/dashboard-trips"
import { UserStats } from "../cmps/dashboard-cmps/user-stats"



export const DashboardPage = (props) => {

    const user = {
        _id: '622f3401e36c59e6164fab4d',
        imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
        isHost: false
    }

    // const { user } = useSelector(storeState => storeState.userModule)

    useEffect(() => {

        // /make it avilavble to also catch id from params
    }, [user])


    const dispatch = useDispatch()


    useEffect(() => {
        console.log('MOUNTED');
        dispatch(setVisitPage('dashboard-page'))
        if (!user.isHost) {

            // props.history.push('/dashboard/trip')
        }

    }, [])


    return <section className="dashboard-page full main-layout">

        <DashboardHeader user={user} />
        <UserStats/>

        <main className="main-dashboard">


            <Switch>
                {/* <Route path="/dashboard/trip" component={DashboardTrips} /> */}
                <Route path="/dashboard" component={DashboardReservations} />
            </Switch>



        </main>

    </section>
}