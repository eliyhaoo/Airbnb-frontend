import { reviewService } from '../../services/review.service'

export function getActionAddReview(review) {
    return { type: 'ADD_REVIEW', review }
}

export function addReview(review) {
    console.log('review from action', review)
    return async dispatch => {
        try {
            const addedReview = await reviewService.addReview(review)
            dispatch(getActionAddReview(addedReview))
        } catch (err) {
            console.log('Review Added')
            throw err
        }
    }
}