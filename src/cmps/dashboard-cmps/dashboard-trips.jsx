import React, { useState } from "react";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { reservationService } from "../../services/reservation.service";
import { StayPreview } from "../general-cmps/stay-preview";

export const DashboardTrips = ({history}) => {

    const { user } = useSelector(storeState => storeState.userModule)
    const { stays } = useSelector(storeState => storeState.stayModule)
    const [listings, setlistings]=useState([])
    

    useEffect(() => {
        if (user){
            loadReservations()
        }
    }, [])

    const loadReservations= async ()=>{
        const reservations = await reservationService.query({buyerId:user._id})
        const userListings = stays.filter(stay=>reservations.some(reservation=>reservation.stayId === stay._id))
        setlistings(userListings)
        console.log('RESERV LISTINGS',userListings);

    }

    if (!user) return <React.Fragment>
        
    <div className="no-stays"><h2>Please login first</h2></div>
    <div className="no-stay-img"></div>
    </React.Fragment>
    if (listings.length === 0) return <div className="no-stays"><h2>No trips reserved yet!</h2></div>
    return <div className="dasboard-reservation">

        <h2>
            My Trips
        </h2>

        <div className="stay-list">
            {listings.map(listing => <StayPreview key={listing._id} stay={listing} history={history} />)}
        </div>
        
    </div>
}