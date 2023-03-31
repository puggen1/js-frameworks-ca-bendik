import React from 'react'
//import { useContext } from 'react'
//import { ProductContext } from '../../context/Products'
import { CartMain, CartItems } from './style'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../components/Cart/CartItem';
import { removeAllProducts } from '../../store/cartSlice/cartSlice'
import Button from '../../components/Button';
const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart.cart);
  console.log(cart)
  return (
    <CartMain>
      <h1>Cart</h1>
      <CartItems>
        {cart.length > 0 ?
        cart.map(product =>{
          return <CartItem id={product.id} key={product.id} title={product.title} amount={product.amount} price={product.discountedPrice}/>
        })
        :<p>No items in cart</p>}
      </CartItems>
      {cart.length > 0? <Button text="Remove all" onClickFunction={()=>dispatch(removeAllProducts())} /> : null}
    </CartMain>
  )
}

export default Cart

