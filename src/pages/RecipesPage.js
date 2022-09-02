import { useContext } from "react";

import ListOfRecipes from "../components/Recipes/ListOfRecipes";
import AuthContext from "../store/auth-context";
import Container from "../components/UI/Container";
import Sidebar from "../components/UI/Sidebar";

const RecipesPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Container>
      {isLoggedIn && <Sidebar title="My Fridge" />}
      <ListOfRecipes />
      {isLoggedIn && <Sidebar title="Cart" />}
    </Container>
  );
};

export default RecipesPage;
