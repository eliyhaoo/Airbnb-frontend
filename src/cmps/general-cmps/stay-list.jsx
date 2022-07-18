import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayPreview } from '../general-cmps/stay-preview'
import { updateUser } from '../../store/actions/user.actions'
import { storageService } from '../../services/async-storage.service.js'

export const StayList = ({ stays, history, onRemoveStay }) => {

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
            const updatedUser = { ...user, wishList: newWishList }
            dispatch(updateUser(updatedUser))
            if (onRemoveStay) onRemoveStay(newWishList)
        } else {
            storageService.putGuestWishList(newWishList)
            if (onRemoveStay) onRemoveStay(newWishList)

        }
    }

    const checkIsInWishList = (stayId) => {
        return wishList.some(itemId => itemId === stayId)
    }

    return <section className="stay-list">
        {stays.map(stay => <StayPreview key={stay._id} stay={stay} history={history} onToggleInWishList={onToggleInWishList} checkIsInWishList={checkIsInWishList} />)}
    </section>
}
