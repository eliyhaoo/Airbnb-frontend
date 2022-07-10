import { reviewService } from '../../services/review.service'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'

export function getActionAddReview(review) {
    return { type: 'ADD_REVIEW', review }
}

export function addReview(review) {

    return async dispatch => {
        try {
            const addedReview = await reviewService.addReview(review)
            dispatch(getActionAddReview(addedReview))
            showSuccessMsg('Review Added')

        } catch (err) {
            showErrorMsg('Failed to add review')
            throw err

        }
    }
}