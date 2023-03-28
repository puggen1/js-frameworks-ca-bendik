import React from 'react'
import { SingleProductContent } from './style'
import { ProductCardImage, ImageSection } from '../Product/style'
import Discount from '../../Discount'
const SingleProduct = ({imageUrl, title, description, discountedPrice, price, id, onDiscount}) => {

  return (
    <SingleProductContent>
        <ImageSection>
            {onDiscount ? <Discount originalPrice={price} newPrice={discountedPrice}/> : null}
            <ProductCardImage src={imageUrl}/>
        </ImageSection>
    </SingleProductContent>
  )
}

export default SingleProduct