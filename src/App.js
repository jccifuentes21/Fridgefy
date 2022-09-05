import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getRecipeData } from "./store/recipes-actions";
import ListOfRecipes from "./components/Recipes/ListOfRecipes";
import Homepage from "./components/UI/Homepage";

import Content from "./components/UI/Content";
import Navbar from "./components/UI/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipeData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {/* <Content /> */}
      <Homepage />
      {/* <ListOfRecipes /> */}
    </>
  );
}

export default App;
