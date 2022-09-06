import { useState } from "react";

const returnURL = (element, endpoint) => {
  if (element.length > 0) {
    return `&${endpoint}=${element.join()}`;
  } else {
    return "";
  }
};

const apiKey = `apiKey=${process.env.REACT_APP_apiKey}`;

const useFetchRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (endpoints, applyFormat) => {
    setIsLoading(true);
    setError(null);
    const { diet, intolerances, cuisine, query, ingredients } = endpoints;

    

    let dietURL = returnURL(diet, "diet");
    let intolerancesURL = returnURL(intolerances, "intolerances");
    let cuisineURL = returnURL(cuisine, "cuisine");
    let ingredientsURL = returnURL(ingredients, "includeIngredients");
    let queryURL = returnURL(query, "query");

    const url = `https://api.spoonacular.com/recipes/complexSearch?${
      apiKey +
      dietURL +
      intolerancesURL +
      cuisineURL +
      ingredientsURL +
      queryURL
    }&fillIngredients=true&number=12`;

    // console.log(url)

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();


      applyFormat(data.results)

    } catch(err) {
      console.log(err)
    }
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetchRecipes;
