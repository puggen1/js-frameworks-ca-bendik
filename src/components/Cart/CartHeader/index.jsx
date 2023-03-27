import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

import { Link } from 'react-router-dom';
import { CartHeaderInner } from './style';
const CartHeader = () => {
  return (
    <CartHeaderInner>
    <Link to="/cart">
    <ShoppingCartIcon fontSize='large' color='info'  />
    </Link>
    </CartHeaderInner>
  )
}

export default CartHeader