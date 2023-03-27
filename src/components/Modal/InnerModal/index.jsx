import React from 'react'
import { useContext } from 'react'
import { NavModalContext } from '../../../context/NavModal'
import Navigation from '../../Nav/Navigation'
import { InnerModalBig, InnerModalSmall, ModalButton } from './style'
import ClearIcon from "@mui/icons-material/Clear"
const InnerModal = () => {
    const {width, setModalStatus} = useContext(NavModalContext);
  return (
    (width < 500)
    ? 
  <InnerModalSmall>
        <ModalButton onClick={()=>{setModalStatus(false)}}><ClearIcon fontSize="large" color='info'/></ModalButton>
        <Navigation modal={true}/>
  </InnerModalSmall>
    :
    <InnerModalBig>
        <ModalButton onClick={()=>{setModalStatus(false)}}><ClearIcon  fontSize='large' color='info'/></ModalButton>
        <Navigation modal={true}/>
    </InnerModalBig>
  )
}

export default InnerModal