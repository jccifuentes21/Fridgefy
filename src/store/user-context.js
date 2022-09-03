import React, { useContext, useState } from "react";

const UserContext = React.createContext({
  userRecipes: [],
  userIngredients: [],
  addRecipes: () => {},
  removeRecipes: () => {},
  addIngredient: () => {},
  removeIngredient: () => {},
  setIngredients: () => {},
  logOutClear: () => {},
});

export const UserContextProvider = (props) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [userIngredients, setUserIngredients] = useState([]);

  const addRecipes = (recipes) => {
    setUserRecipes(recipes);
  };

  const removeRecipes = () => {
    setUserRecipes([]);
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
    setUserIngredients([])
    setUserRecipes([])
  };

  const contextValue = {
    userRecipes,
    userIngredients,
    addRecipes,
    removeRecipes,
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
