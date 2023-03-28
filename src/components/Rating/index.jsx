import React from 'react'
import { InnerRating, SecondaryColorRating } from './style'
const RatingSection = ({rating, numberOfReviews}) => {
  return (
    <InnerRating className='rating'>
        <SecondaryColorRating color='secondary'  name='productRating' readOnly defaultValue={rating} precision={0.1}/>
        <p>({numberOfReviews})</p>
    </InnerRating>
  )
}

export default RatingSection