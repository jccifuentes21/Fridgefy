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
    <>
      <div className={classes["nav-bar"]}>
        <img src="./images/logo.png" />

        <ul>
          <li>
            <NavLink to="/welcome">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes" className={classes["nav-buttons"]}>
              Recipes
            </NavLink>
          </li>
          <li>
            {isLoggedIn && (
              <NavLink to="/shopping-list">My Shopping List</NavLink>
            )}
          </li>
        </ul>
        <div className={classes["button-group"]}>
          {isLoggedIn && <p>Hello, {userInfo.displayName}!</p>}

          {!isLoggedIn && (
            <button className={classes["log-buttons"]} onClick={handleLogin}>
              <img src="./images/btn-login.png" />
              Login
            </button>
          )}
          {/* <button className={classes["log-buttons"]} onClick={handleCurrent}>
          Current
        </button> */}
          {isLoggedIn && (
            <button className={classes["log-buttons"]} onClick={handleLogout}>
              <img src="./images/btn-logout.png" />
              Logout
            </button>
          )}
        </div>
      </div>
      <img className={classes['navbar-decoration']} src="./images/top-decoration.png"/>
    </>
  );
};

export default Navbar;
