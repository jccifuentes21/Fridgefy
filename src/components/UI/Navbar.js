import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { signInWithGoogle, signUserOut, db } from "../../store/Firebase";
import { doc, setDoc } from "firebase/firestore";
import UserContext from "../../store/user-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, logout, isLoggedIn, userInfo, UID } = useContext(AuthContext);
  const { logOutClear, userIngredients, userRecipes } = useContext(UserContext);

  const handleLogin = () => {
    signInWithGoogle(login, ()=> navigate('/recipes'));

  };

  const handleLogout = () => {
    signUserOut(logout);
    setTimeout(() => {
      logOutClear();
      navigate('/welcome')
    }, 300);

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
      {location.pathname !=='/welcome' && <img
        className={classes["navbar-decoration"]}
        src="./images/top-decoration.png"
      />}
    </>
  );
};

export default Navbar;
