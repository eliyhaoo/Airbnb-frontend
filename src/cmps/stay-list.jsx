import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayPreview } from './stay-preview'
import { updateUser } from "../store/actions/user.actions"
import { storageService } from '../services/async-storage.service.js'
<<<<<<< HEAD
import { Loader } from '../cmps/loader'
=======
import { Loader } from './loader'
>>>>>>> a9daf721ee13f36985083dffbabd7d2d612a66ba

export const StayList = ({ stays, history }) => {

    let { user } = useSelector(storeState => storeState.userModule)
    const [wishList, setWishList] = useState(user ? user.wishList : storageService.getGuestWishList())
    const dispatch = useDispatch()

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
            user = { ...user, wishList: newWishList }
            dispatch(updateUser(user))
        } else {
            storageService.putGuestWishList(newWishList)

        }
    }

    const checkIsInWishList = (stayId) => {
        if (wishList.some(itemId => itemId === stayId)) return true
    }

    return <section className="stay-list">
        {stays.map(stay => <StayPreview key={stay._id} stay={stay} history={history} onToggleInWishList={onToggleInWishList} checkIsInWishList={checkIsInWishList} />)}
    </section>
}
