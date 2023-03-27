import React from 'react'
import Rating from '@mui/material/Rating'
import { InnerRating } from './style'
const RatingSection = ({rating, numberOfReviews}) => {
  return (
    <InnerRating>
        <Rating color='secondary'  name='productRating' readOnly defaultValue={rating} precision={0.1}/>
        <p>({numberOfReviews})</p>
    </InnerRating>
  )
}

export default RatingSection