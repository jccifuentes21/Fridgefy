import { useContext } from "react";

import ListOfRecipes from "../components/Recipes/ListOfRecipes";
import AuthContext from "../store/auth-context";
import Container from "../components/UI/Container";
import Sidebar from "../components/UI/Sidebar";
import MyFridge from "../components/Fridge/MyFridge";

const RecipesPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Container>
      {isLoggedIn && <MyFridge />}
      <ListOfRecipes />
      {isLoggedIn && <Sidebar title="Cart" />}
    </Container>
  );
};

export default RecipesPage;
