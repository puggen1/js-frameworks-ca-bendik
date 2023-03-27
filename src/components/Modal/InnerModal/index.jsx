import React from 'react'
import { useContext } from 'react'
import { NavModalContext } from '../../../context/NavModal'
import Navigation from '../../Nav/Navigation'
import { InnerModalBig, InnerModalSmall } from './style'
const InnerModal = () => {
    const {width, setModalStatus} = useContext(NavModalContext);
  return (
    (width < 500)
    ? 
  <InnerModalSmall>
        <button onClick={()=>{setModalStatus(false)}}>back</button>
        <Navigation modal={true}/>
  </InnerModalSmall>
    :
    <InnerModalBig>
        <button onClick={()=>{setModalStatus(false)}}>back</button>
        <Navigation modal={true}/>
    </InnerModalBig>
  )
}

export default InnerModal