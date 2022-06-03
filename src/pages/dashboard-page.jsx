import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setVisitPage } from "../store/actions/system.action"
import { DashboardHeader } from "../cmps/dashboard-cmps/dashboard-header"



export const DashboardPage = () => {

    const user = {
        _id: '622f3401e36c59e6164fab4d', imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
    }

    const dispatch = useDispatch()
 

    useEffect(() => {
        dispatch(setVisitPage('dashboard-page'))
    }, [])


    return <section className="dashboard-page full main-layout">
        
        <DashboardHeader user={user}/>

        <main className="main-dashboard">
            main dashboard
        </main>

    </section>
}