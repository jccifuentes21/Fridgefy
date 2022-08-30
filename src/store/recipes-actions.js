import { recipeActions } from "./recipe-slice";

const apiKey = process.env.REACT_APP_apiKey;

export const getRecipeData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}`
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
