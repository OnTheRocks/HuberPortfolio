import NavLinks from "./NavLinks";
import classes from './NavBar.module.css'
import {ImCancelCircle, ImMenu} from 'react-icons/im'
import { useState } from "react";

const MobileNavication = () => {

  const [open, setOpen] = useState(false)

  const hamburgerIcon = <ImMenu className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />
  const closeIcon = <ImCancelCircle className={classes.Hamburger} size='40px' color='white' onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen (false);

  return ( 
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
   );
}
 
export default MobileNavication;