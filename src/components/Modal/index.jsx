import { useContext } from "react"
import { NavModalContext } from "../../context/NavModal"
import { Modal as MuiModal }  from "@mui/material"
import Navigation from "../Nav/Navigation";
import InnerModal from "./InnerModal";
const Modal = () => {
    const {modalStatus,setModalStatus, width} = useContext(NavModalContext);
  return (
    (width < 1024) ? 
    <MuiModal open={modalStatus} onClose={()=>{setModalStatus(false)}}>
        <InnerModal/>
    </MuiModal> : null
  )
}

export default Modal