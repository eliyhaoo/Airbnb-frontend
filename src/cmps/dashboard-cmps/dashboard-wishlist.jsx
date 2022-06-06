import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { storageService } from "../../services/async-storage.service"
import { loadStays } from "../../store/actions/stay.action"
import { updateUser } from "../../store/actions/user.actions"
import { StayPreview } from "../stay-preview"


export const DashboardWishlist = ({ history }) => {

    const { stays } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [wishList, setWishList] = useState(user ? user.wishList : storageService.getGuestWishList())
    const dispatch = useDispatch()



    useEffect(() => {
        // dispatch(loadStays())
        // stays= stays.filter(stayId => user.wishList.some(stayIdInWishList => stayIdInWishList === stayId))
    }, [])

    const onToggleInWishList = (ev, stayId) => {
        ev.stopPropagation()
        let newWishList
        if (checkIsInWishList(stayId)) {
            newWishList = wishList.filter(itemId => itemId !== stayId)
        } else {
            newWishList = [...wishList, stayId]
        }
        setWishList(newWishList)
        if (user) {
            user.wishList = newWishList
            console.log('userAfterUpdate', user)
            dispatch(updateUser(user))
        } else {
            storageService.putGuestWishList(newWishList)

        }
    }


    const checkIsInWishList = (stayId) => {
        if (wishList.some(itemId => itemId === stayId)) return true

    }

    const getStaysToDisplay = () => {
        
        return stays.filter(stay => user.wishList.some(stayIdInWishList => stayIdInWishList === stay._id))

    }


    if (!stays || !stays.length) return <div className="loader"></div>
    return <section className="dashboard-wishlist flex direction-column">

        <h2 className="dashboard-title">Wishlist</h2>
        <div className="stay-list">

        {getStaysToDisplay().map(stay => <StayPreview key={stay._id} stay={stay} history={history} onToggleInWishList={onToggleInWishList} checkIsInWishList={checkIsInWishList} />)}
        </div>

    </section>
}