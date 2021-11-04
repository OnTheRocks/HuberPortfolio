import MobileNavication from './MobileNavigation';
import classes from './NavBar.module.css'
import Navigation from './Navigation';

const NavBar = () => {
  return ( 
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavication />
    </div>
   );
}
 
export default NavBar;