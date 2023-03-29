import styled from "styled-components";

const OverallReview = styled.div`
    display: flex;
    flex-direction: row;
    p{
        font-size: 20px;
        margin: 5px 0;
    }
`
const ReviewSection = styled.div`
height: 80%;
width: 80%;
margin: auto 0;
display: flex;
flex-direction: column;
`

const AllReviews = styled.div`
display: flex;
flex-direction: column;
gap: 20px;


`
export {OverallReview, ReviewSection, AllReviews}