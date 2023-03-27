import Navigation from './Navigation';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { NavModalContext } from '../../context/NavModal';
import { useContext } from 'react';
const Nav = () => {
    const {width, setModalStatus} = useContext(NavModalContext)
    return ((width > 1024) ? <Navigation/> : <button onClick={()=>{setModalStatus(true)}}><MenuRoundedIcon color='info'/></button>)
}

export default Nav