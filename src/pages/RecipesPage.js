import { useContext } from "react";
import ListOfRecipes from "../components/Recipes/ListOfRecipes";
import AuthContext from "../store/auth-context";

const RecipesPage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <ListOfRecipes />
    </>
  );
};

export default RecipesPage;
