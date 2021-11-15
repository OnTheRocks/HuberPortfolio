import classes from './Home.module.css'
import BG from '../../img/background.jpg'

const Home = () => {
  return ( 
    <div className={classes.Home}>
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Hello World!</h1>
        <h1>Welcome to my Homepage.</h1>
      </div>
      <img className={classes.BG} src={BG} alt="code"></img>
      {/* <im className={classes.BinaryWorld} src={BinaryWorld} alt="BinaryWorld"></im> */}
    </div>
   );
}
 
export default Home;