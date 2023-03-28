import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard, ProductCardImage, ImageSection, LowerCard } from './style'
import RatingSection from '../../Rating'
import Discount from '../../Discount'
const Product = ({title, image, discountedPrice, oldPrice, onDiscount, rating, numberOfReviews, id}) => {
    return(
        <ProductCard>
            <ImageSection>
            {onDiscount ? <Discount originalPrice={oldPrice} newPrice={discountedPrice}/> : null}
            <ProductCardImage src={image}/>
            </ImageSection>
            <LowerCard>
            <h2 className='title'>{title}</h2>
            <RatingSection  rating={rating} numberOfReviews={numberOfReviews}/>
            <p  className='price'>KR {discountedPrice}</p>
            <Link className='button productCardButton' to={`/product/` + id}>View Product</Link>
            </LowerCard>
        </ProductCard>
    )
}

export default Product