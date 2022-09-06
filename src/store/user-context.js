import React, { useState } from "react";

const UserContext = React.createContext({
  userRecipes: [],
  userIngredients: [],
  addRecipe: () => {},
  removeRecipe: () => {},
  setRecipes: () => {},
  addIngredient: () => {},
  removeIngredient: () => {},
  setIngredients: () => {},
  logOutClear: () => {},
});

export const UserContextProvider = (props) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [userIngredients, setUserIngredients] = useState([]);

  const addRecipe = (recipes) => {
    setUserRecipes((prevState) => {
      return [...prevState, recipes];
    });
  };

  const removeRecipe = (recipe) => {
    setUserRecipes((prevState) => {
      return prevState.filter((item) => item.id !== recipe.id);
    });
  };

  const setRecipes = (recipes) => {
    setUserRecipes(recipes);
  };

  const setIngredients = (ingredients) => {
    setUserIngredients(ingredients);
  };

  const addIngredient = (ingredient) => {
    setUserIngredients((prevState) => {
      return [...prevState, ingredient];
    });
  };

  const removeIngredient = (ingredient) => {
    setUserIngredients((prevState) => {
      return prevState.filter((item) => item !== ingredient);
    });
  };

  const logOutClear = () => {
    setUserIngredients([]);
    setUserRecipes([]);
  };

  const contextValue = {
    userRecipes,
    userIngredients,
    addRecipe,
    removeRecipe,
    setRecipes,
    setIngredients,
    addIngredient,
    removeIngredient,
    logOutClear,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
