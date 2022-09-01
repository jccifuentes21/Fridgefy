import useFetchRecipes from "../../hooks/use-fetchRecipes";
import { useContext, useRef, useState } from "react";
import FilterContext from "../../store/filters-context";

import RecipeItem from "./RecipeItem";

const ListOfRecipes = () => {
  const { filterData, addFilterData } = useContext(FilterContext);
  const queryInput = useRef();

  const { error, isLoading, sendRequest } = useFetchRecipes();
  const [recipes, setRecipes] = useState([]);

  const transformData = (recipesObj) => {
    const recipeResults = [];

    for (const recipe in recipesObj) {
      recipeResults.push({
        id: recipesObj[recipe].id,
        title: recipesObj[recipe].title,
        image: recipesObj[recipe].image,
        missedIngredients: recipesObj[recipe].missedIngredients,
        usedIngredients: recipesObj[recipe].usedIngredients,
      });
    }

    setRecipes(recipeResults);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    sendRequest(filterData, transformData);
  };

  const handleQueryChange = () => {
    const enteredQuery = queryInput.current.value;

    const queryData = enteredQuery.split(" ");

    addFilterData("query", queryData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleQueryChange}
          type="text"
          placeholder="Search..."
          ref={queryInput}
        />
        <button>Search</button>
      </form>
      {recipes.map((recipe) => {
        return (
          <RecipeItem
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        );
      })}
    </>
  );
};

export default ListOfRecipes;
