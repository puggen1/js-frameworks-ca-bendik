import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard, ProductCardImage, ImageSection } from './style'
import RatingSection from '../../Rating'
import Discount from '../../Discount'
const Product = ({title, image, discountedPrice, oldPrice, onDiscount, rating, numberOfReviews, id}) => {
    return(
        <ProductCard>
            <ImageSection>
            {onDiscount ? <Discount originalPrice={oldPrice} newPrice={discountedPrice}/> : null}
            <ProductCardImage src={image}/>
            </ImageSection>
            <h2>{title}</h2>
            <RatingSection rating={rating} numberOfReviews={numberOfReviews}/>
            <p>KR {discountedPrice}</p>
            <Link className='button' to={`/product/` + id}>View Product</Link>
        </ProductCard>
    )
}

export default Product