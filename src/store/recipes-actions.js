import { recipeActions } from "./recipe-slice";

const apiKey = process.env.REACT_APP_apiKey;

// https://api.spoonacular.com/recipes/complexSearch?apiKey=0e4aa105f5f04676b653e053371e7686&query=pasta&includeIngredients=cheese,+tomato&fillIngredients=true
//To add query endpoints = `&query=${query words separated by commas}`
//To add fridge items to the edpoint = `&includeIngredients=${fridgeItems separated by commas}`
//To add filters `&diet=${diet}&cuisine=${cuisine separated by commas}&intolerances=${intolerances separated by commas}

export const getRecipeData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/Complexsearch?apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      console.log(data.results)

      return data;
    };

    try {
      const recipesData = await fetchData();
      dispatch(
        recipeActions.setRecipes({
          recipes: recipesData.results,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};
