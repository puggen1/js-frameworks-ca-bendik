import RatingSection from "../Rating"
import { OverallReview, ReviewSection,AllReviews } from "./style"
import Review from "./Review"
const Reviews = ({reviews, rating}) => {
  return (
    <ReviewSection>
    <h2>Reviews</h2>
    <OverallReview>
    <p>Overall:</p> 
    <RatingSection rating={rating} numberOfReviews={reviews.length}/>
    </OverallReview>
    <AllReviews>
      {(reviews.length > 0) ? reviews.map(review =>{
        return <Review data={review}/>
      }) : null}
    </AllReviews>
    </ReviewSection>
      )
}

export default Reviews