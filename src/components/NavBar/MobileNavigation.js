import NavLinks from "./NavLinks";
import classes from './NavBar.module.css'
import {ImMenu} from 'react-icons/im'
import { useState } from "react";

const MobileNavication = () => {

  const [open, setOpen] = useState(false)

  return ( 
    <nav className={classes.MobileNavigation}>
      <ImMenu className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />
      {open && <NavLinks />}
    </nav>
   );
}
 
export default MobileNavication;