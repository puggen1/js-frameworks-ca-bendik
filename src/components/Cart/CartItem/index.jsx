import React from 'react'
import { Item, Label, Info, Remove } from './style'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/cartSlice/cartSlice';
const CartItem = ({title, amount, price, id}) => {
    const dispatch = useDispatch();
    //price = price * amount or single price?
  return (
    <Item>
        <Label className="title">Product Name</Label>
        <Label className="amount">Amount</Label>
        <Label className="price">Price</Label>
        <Info className="productTitle">{title}</Info>
        <Info className="productAmount">{amount}</Info>
        <Info className="productPrice">{(price * amount).toFixed(2)}</Info>
        <Remove onClick={()=>{dispatch(removeProduct({id, all:true}))}} className='remove'><ClearIcon fontSize='large'/></Remove>
    </Item>
  )
}

export default CartItem