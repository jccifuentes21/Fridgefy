import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <img src="./images/logo.png"/>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">My shopping list</a></li>
        </ul>
 
      <div className={classes['button-group']}>
        <p>Hello, user!</p>
        <button className={classes['log-buttons']}> <img src="./images/btn-login.png"/> Login</button>
        {/* <button className={classes['log-buttons']}> <img src="./images/btn-logout.png"/> Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
