import { useEffect, useState } from 'react'
import { stayService } from '../../services/stay.service'
import { StayPreview } from '../general-cmps/stay-preview'
import { Loader } from '../../cmps/general-cmps/loader'
import { useSelector } from 'react-redux'

export const DashboardListings = ({ history }) => {
    const [listings, setListings] = useState()
    const { user } = useSelector(storeState => storeState.userModule)

    useEffect(() => {
        if (user) {
            loadListings()
        } else {
            history.push('/explore')
        }
    }, [])

    const loadListings = async () => {
        const listings = await stayService.query({ hostId: user._id })
        setListings(listings)
    }

    if (!listings || !listings.length) return <Loader />
    return <section className="dashboard-listings flex direction-column">
        <h2 className="dashboard-title">Listings</h2>
        <div className="stay-list">
            {listings.map(listing => <StayPreview key={listing._id} stay={listing} history={history} />)}
        </div>
    </section>
}