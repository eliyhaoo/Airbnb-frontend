import { useEffect } from "react"

export const DashboardTrips =()=>{

     useEffect(()=>{
         console.log('TRIPS MOUNTED!!!!!!!!!!!');
     },[])

    return <div className="dasboard-reservation">

<h2>
    My Trips
    </h2>
    </div>
}