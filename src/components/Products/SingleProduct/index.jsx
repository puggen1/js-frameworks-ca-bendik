import React from 'react'
import { SingleProductContent, ProductInfo, Title, Desc, Price, SinglePageImageSection, SinglePageImage } from './style'
import Button from '../../Button'
import Discount from '../../Discount'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../store/cartSlice/cartSlice'
const SingleProduct = ({imageUrl, title, description, discountedPrice, price, id, onDiscount}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
   const adder = ()=>{
    dispatch(addProduct({title, discountedPrice, id}))
   }
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
            <Button text="Add to cart" onClickFunction={adder} extraClass="addToCart"/>
        </ProductInfo>
    </SingleProductContent>
  )
}

export default SingleProduct