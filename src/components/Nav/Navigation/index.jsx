import React from 'react'
import { Link } from 'react-router-dom'
import { NavSection, ModalNavSection } from './index.styles'
import "../../../theme/style.css";
const Navigation = ({modal}) => {
  return (
    modal
    ?
    <ModalNavSection>
        <Link className='defaultLink' to="/">Home</Link>
        <Link className='defaultLink' to="/contact">Contact</Link>    
    </ModalNavSection>
    :  
    <NavSection>
        <Link className='defaultLink' to="/">Home</Link>
        <Link className='defaultLink' to="/contact">Contact</Link>
    </NavSection>
  
  )
}

export default Navigation