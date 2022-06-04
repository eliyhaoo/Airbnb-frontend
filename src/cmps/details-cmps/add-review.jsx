import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveStay } from '../../store/actions/stay.action'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { utilService } from '../../services/util.service';


export function AddReview({ stay }) {

    const [review, setReview] = useState({
        at: Date.now(),
        by: {
            "_id": Math.random() * 1000 % 4,
            "fullname": "Guest",
            "imgUrl": "https://res.cloudinary.com/dqj9g5gso/image/upload/v1643443242/ikphiwhe8k6iut1ic2oa.jpg"
        },
        txt: ''
    })

    const [reviewScore, setReviewScore] = useState({
        accuracy: 0,
        cleanliness: 0,
        checkin: 0,
        communication: 0,
        location: 0,
        value: 0,
        rating: 0
    })

    const dispatch = useDispatch()


    const onAddReview = (ev) => {
        ev.preventDefault()
        stay.reviews.unshift(review)
        console.log('reviewScores', reviewScore)
        console.log('review', review)
    }

    const handleChange = ({ target }) => {
        const name = target.name
        const value = target.type === "number" ? +target.value : target.value
        setReview({ ...review, [name]: value })
    }

    const handleRaiting = ({ target }) => {
        const name = target.name
        const value = +target.value
        setReviewScore({ ...reviewScore, [name]: value })
    }

    return <div className="add-review-container">


        <h3>Add a review about this stay</h3>
        <form className="review-form" onSubmit={(onAddReview)}>

            <div className="review-rating-container">

                <div className='review-rating'>
                    <p>Cleanliness:</p>
                    <Stack spacing={1.5} >
                        <Rating name="cleanliness" value={reviewScore.cleanliness} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
                <div className='review-rating'>
                    <p>Communication:</p>
                    <Stack spacing={1.5}>
                        <Rating name="communication" value={reviewScore.communication} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
                <div className='review-rating'>
                    <p>Check-in:</p>
                    <Stack spacing={1.5}>
                        <Rating name="checkin" value={reviewScore.checkin} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
                <div className='review-rating'>
                    <p>Location:</p>
                    <Stack spacing={1.5}>
                        <Rating name="location" value={reviewScore.location} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
                <div className='review-rating'>
                    <p>Accuracy:</p>
                    <Stack spacing={1.5}>
                        <Rating name="accuracy" value={reviewScore.accuracy} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
                <div className='review-rating'>
                    <p>Value:</p>
                    <Stack spacing={1.5}>
                        <Rating name="value" value={reviewScore.value} precision={0.5} onChange={handleRaiting} />
                    </Stack>
                </div>
            </div>


            <Box
                sx={{
                    maxWidth: '100%',

                }}
            >
                <TextField name="txt" id="txt" value={review.txt} onChange={handleChange} autoComplete="off" fullWidth label="Share your exprience with this stay" id="fullWidth" />
            </Box>


            <button>Add Review</button>
        </form>
    </div>

}






