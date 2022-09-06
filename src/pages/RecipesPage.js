import { useContext } from "react";

import ListOfRecipes from "../components/Recipes/ListOfRecipes";
import AuthContext from "../store/auth-context";
import Container from "../components/UI/Container";
import MyFridge from "../components/Fridge/MyFridge";
import Cart from "../components/Recipes/Cart";

const RecipesPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Container>
      {isLoggedIn && <MyFridge />}
      <ListOfRecipes />
        {isLoggedIn && <Cart />}
    </Container>
  );
};

export default RecipesPage;
