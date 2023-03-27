import React from 'react'
import { useContext } from 'react'
import { NavModalContext } from '../../../context/NavModal'
import Navigation from '../../Nav/Navigation'
import { InnerModalBig, InnerModalSmall } from './style'
const InnerModal = () => {
    const {width} = useContext(NavModalContext);
  return (
    (width < 500)
    ? 
  <InnerModalSmall>
        <Navigation modal={true}/>
  </InnerModalSmall>
    :
    <InnerModalBig>
        <Navigation modal={true}/>
    </InnerModalBig>
  )
}

export default InnerModal