import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Container from "../UI/Container";
import UserRecipeItem from "./UserRecipeItem";

import classes from "./UserRecipes.module.css";

const UserRecipes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  //Use effect here to pull all the recipe data

  return (
    <Container
      classes={`${classes["main-container"]} ${
        isLoggedIn ? classes.logged : classes.notLogged
      }`}
    >
      <UserRecipeItem />
      <UserRecipeItem />
      <UserRecipeItem />
    </Container>
  );
};

// ${
//   isLoggedIn ? classes.logged : classes.notLogged
// }

export default UserRecipes;
