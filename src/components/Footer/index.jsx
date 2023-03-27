import React from 'react'
import { Link } from 'react-router-dom'
import {Footer as InnerFooter} from "./style.js"
const Footer = () => {
  return (
    <InnerFooter>
        <Link to="/">Home</Link>
        <p>{new Date().getFullYear()} - Shop name</p>
        <Link to="/contact">Contact</Link>
    </InnerFooter>
  )
}

export default Footer