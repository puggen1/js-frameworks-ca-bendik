import React from 'react'
import { SingleProductContent, ProductInfo, Title, Desc, Price } from './style'
import Button from '../../Button'
import { ProductCardImage, ImageSection } from '../Product/style'
import Discount from '../../Discount'
const SingleProduct = ({imageUrl, title, description, discountedPrice, price, id, onDiscount}) => {

  return (
    <SingleProductContent>
        <ImageSection>
            {onDiscount ? <Discount originalPrice={price} newPrice={discountedPrice}/> : null}
            <ProductCardImage src={imageUrl}/>
        </ImageSection>
        <ProductInfo>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Price>{price},- Kr</Price>
            <Button text="Add to cart" extraClass="addToCart"/>
        </ProductInfo>
    </SingleProductContent>
  )
}

export default SingleProduct