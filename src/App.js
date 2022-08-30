import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getRecipeData } from "./store/recipes-actions";
import ListOfRecipes from "./components/ListOfRecipes";
import MyFridge from './components/UI/MyFridge'
import MyRecipes from './components/UI/MyRecipes'
import Cart from './components/UI/Cart'
import Navbar from "./components/UI/Navbar";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecipeData());
  // }, [dispatch]);

  return (
    <>
      <Navbar />
      <MyFridge />
      <MyRecipes />
      <Cart />
      {/* <ListOfRecipes /> */}
    </>
  );
}

export default App;
