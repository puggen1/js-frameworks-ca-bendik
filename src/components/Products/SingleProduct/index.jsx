import React from 'react'
import { SingleProductContent, ProductInfo, Title, Desc, Price, SinglePageImageSection, SinglePageImage } from './style'
import Button from '../../Button'
import Discount from '../../Discount'
const SingleProduct = ({imageUrl, title, description, discountedPrice, price, id, onDiscount}) => {

  return (
    <SingleProductContent>
        <SinglePageImageSection>
            {onDiscount ? <Discount originalPrice={price} newPrice={discountedPrice}/> : null}
            <SinglePageImage src={imageUrl}/>
        </SinglePageImageSection>
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