import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";
import Container from "../UI/Container";
import UserRecipeItem from "./UserRecipeItem";

import classes from "./UserRecipes.module.css";

const UserRecipes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { userRecipes } = useContext(UserContext);

  
  return (
    <Container
      classes={`${classes["main-container"]} ${
        isLoggedIn ? classes.logged : classes.notLogged
      }`}
    >
      {userRecipes.map((recipe) => {
        return (<UserRecipeItem key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image}/>)
      })}
    </Container>
  );
};

// ${
//   isLoggedIn ? classes.logged : classes.notLogged
// }

export default UserRecipes;
