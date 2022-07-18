
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storageService } from '../../services/async-storage.service'
import { loadStays } from '../../store/actions/stay.action'
import { StayList } from '../general-cmps/stay-list'


export const DashboardWishlist = ({ history }) => {

    const dispatch = useDispatch()
    const { stays } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [wishList, setWishList] = useState(user ? user.wishList : storageService.getGuestWishList())


    useEffect(() => {
        if (!stays.length) {
            dispatch(loadStays())
        }
    }, [])

    const onRemoveStay = (wishList) => {
        setWishList(wishList)
    }


    const getStaysToDisplay = () => {
        return stays.filter(stay => wishList.some(stayIdInWishList => stayIdInWishList === stay._id))
    }

    if (!getStaysToDisplay().length) return <div className="no-stays">
        <h2>Nothing saved yet...</h2>
    </div>
    return <section className="dashboard-wishlist flex direction-column">

        <h2 className="dashboard-title">Wishlist</h2>
        <StayList stays={getStaysToDisplay()} history={history} onRemoveStay={onRemoveStay} />

    </section>
}