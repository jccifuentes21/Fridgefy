import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import {
  // getUserData,
  signInWithGoogle,
  signUserOut,
} from "../../store/Firebase";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { login, logout, isLoggedIn, userInfo } = useContext(AuthContext);

  const handleLogin = () => {
    signInWithGoogle(login);
  };

  const handleLogout = () => {
    signUserOut(logout);
  };

  // const handleCurrent = () => {
  //   getUserData();
  // };

  return (
    <div className={classes["nav-bar"]}>
      <NavLink to="/welcome">
        <h1>Frigefy</h1>
      </NavLink>
      <div className={classes["button-group"]}>
        <NavLink to="/recipes" className={classes["nav-buttons"]}>
          <button>Recipes</button>
        </NavLink>
        <NavLink to="/shopping-list">
          {isLoggedIn && (
            <button className={classes["nav-buttons"]}>My Shopping List</button>
          )}
        </NavLink>
        {isLoggedIn && <p>Hello, {userInfo.displayName}!</p>}
        {!isLoggedIn && (
          <button className={classes["log-buttons"]} onClick={handleLogin}>
            Login
          </button>
        )}
        {/* <button className={classes["log-buttons"]} onClick={handleCurrent}>
          Current
        </button> */}
        {isLoggedIn && (
          <button className={classes["log-buttons"]} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
