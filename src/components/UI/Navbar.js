import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["nav-bar"]}>
      <h1>Frigefy</h1>
      <div className={classes['button-group']}>
        <button className={classes['nav-buttons']}>Recipes</button>
        <button className={classes['nav-buttons']}>My Shopping List</button>
        <p>Hello, user!</p>
        <button className={classes['log-buttons']}>Login</button>
        <button className={classes['log-buttons']}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
