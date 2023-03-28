import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/Products'
import { Main } from '../../theme/theme'

const Cart = () => {
  const {dataToDisplay} = useContext(ProductContext);
  return (
    <Main>Cart</Main>
  )
}

export default Cart

