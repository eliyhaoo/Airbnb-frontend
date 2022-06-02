import { reviewService } from '../../services/review.service'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'

export function getActionAddReview(review) {
    return { type: 'ADD_REVIEW', review }
}

export function addReview(review) {
    console.log('review from action', review)
    return async dispatch => {
        try {
            const addedReview = await reviewService.addReview(review)
            dispatch(getActionAddReview(addedReview))
            console.log('Review Added')
            showSuccessMsg('Review Added')

        } catch (err) {
            throw err

        }
    }
}