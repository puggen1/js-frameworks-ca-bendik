import React from 'react'
import { InnerHeader, Logo } from './style'
import Nav from '../Nav'
import CartHeader from '../Cart/CartHeader'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <InnerHeader>
        <Nav/>
        <Logo><Link className='defaultLink' to="/">Shop'n go</Link></Logo>
        <CartHeader/>
    </InnerHeader>
  )
}

export default Header