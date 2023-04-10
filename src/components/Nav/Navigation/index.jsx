import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavModalContext } from '../../../context/NavModal';
import { NavSection, ModalNavSection } from './index.styles'
import "../../../theme/style.css";
/**
 * 
 * @param {object} props the modal state (modal) 
 * @returns the nav content, based on the state
 */
const Navigation = ({modal}) => {
  const {setModalStatus} = useContext(NavModalContext);
  return (
    modal
    ?
    <ModalNavSection>
        <Link className='defaultLink' onClick={()=>{setModalStatus(false)}} to="/">Home</Link>
        <Link className='defaultLink' onClick={()=>{setModalStatus(false)}} to="/contact">Contact</Link>    
    </ModalNavSection>
    :  
    <NavSection>
        <Link className='defaultLink' onClick={()=>{setModalStatus(false)}} to="/">Home</Link>
        <Link className='defaultLink' onClick={()=>{setModalStatus(false)}} to="/contact">Contact</Link>
    </NavSection>
  
  )
}

export default Navigation