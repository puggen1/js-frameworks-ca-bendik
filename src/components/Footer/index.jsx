import React from 'react'
import { Link } from 'react-router-dom'
import {Footer as InnerFooter} from "./index.styles.js"
const Footer = () => {
  return (
    <InnerFooter>
        <Link className='toHome' to="/">Home</Link>
        <p>{new Date().getFullYear()} - Shop'n Go</p>
        <Link className='toContact' to="/contact">Contact</Link>
    </InnerFooter>
  )
}

export default Footer