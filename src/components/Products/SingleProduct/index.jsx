import {useState} from 'react'
import { SingleProductContent, ProductInfo, Title, Desc, Price, SinglePageImageSection, SinglePageImage } from './index.styles'
import Button from '../../Button'
import Discount from '../../Discount'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/cartSlice/cartSlice'
import {Snackbar } from '@mui/material'
/**
 * 
 * @param {object} props all info needed to create the single page product
 * @description creates the product page product, and gives it buttons to add to cart, as well as an response when added
 * @returns single page product component
 */
const SingleProduct = ({imageUrl, title, description, discountedPrice, price, id, onDiscount}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
   const adder = ()=>{
    setOpen(false)
    dispatch(addProduct({title, discountedPrice, id}))
    setOpen(true)
   }
  return (
    <>
   { open ?  <Snackbar open={open} autoHideDuration={1000}
  onClose={()=>{setOpen(false)}}
  message="Added to cart"
  anchorOrigin={{ vertical:"top", horizontal:"right" }}
  />:null}
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
    </>
  )
}

export default SingleProduct