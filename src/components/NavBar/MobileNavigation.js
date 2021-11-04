import NavLinks from "./NavLinks";
import classes from './NavBar.module.css'

const MobileNavication = () => {
  return ( 
    <nav className={classes.MobileNavigation}>
      <NavLinks />
    </nav>
   );
}
 
export default MobileNavication;