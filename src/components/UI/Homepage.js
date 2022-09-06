import { NavLink } from "react-router-dom";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={`${classes.container}`}>
      <div>
        <h1>Welcome to fridgefy, home of the best recipes.</h1>
        <NavLink to="/recipes">
          See Recipes
        </NavLink>
      </div>
    </div>
  );
};

export default Homepage;
