import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storageService } from "../../services/async-storage.service"
import { stayService } from "../../services/stay.service"
import { updateUser } from "../../store/actions/user.actions"
import { StayPreview } from "../stay-preview"


export const DashboardListings = ({ history }) => {


    // const { user } = useSelector(storeState => storeState.userModule)
    const [listings, setListings] = useState()

    const user = {
        _id: '622f3403e36c58e6164naf93',
        imgUrl: 'https://res.cloudinary.com/dys1y33zj/image/upload/v1653814932/8_o4nctw.jpg',
        isHost: true,
        wishList: ['6297cb852f760e2ec9f8244b']
    }



    useEffect(() => {

        loadListings()
    }, [])

    const loadListings = async () => {
        const listings = await stayService.query({ hostId: user._id })
        setListings(listings)
    }




    if (!listings || !listings.length) return <div className="loader"></div>
    return <section className="dashboard-listings flex direction-column">


        <h2 className="dashboard-title">Listings</h2>
        <div className="stay-list">
            {listings.map(listing => <StayPreview key={listing._id} stay={listing} history={history} />)}
        </div>

    </section>
}