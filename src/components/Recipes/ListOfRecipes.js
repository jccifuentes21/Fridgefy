import useFetchRecipes from "../../hooks/use-fetchRecipes";
import { useContext, useEffect, useRef, useState } from "react";
import FilterContext from "../../store/filters-context";

import RecipeItem from "./RecipeItem";
import Container from "../UI/Container";
import classes from "./ListOfRecipes.module.css";
import AuthContext from "../../store/auth-context";

const ListOfRecipes = () => {
  const { filterData, addFilterData } = useContext(FilterContext);

  const { isLoggedIn } = useContext(AuthContext);
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

  useEffect(()=>{
    sendRequest(filterData, transformData)
  }, [])

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
    <Container
      classes={`${classes['main-container']} ${isLoggedIn ? classes.isLogged : classes.isNotLogged}`}
    >
      <form onSubmit={submitHandler}>
        <input
          onChange={handleQueryChange}
          type="text"
          placeholder="Search for a recipe..."
          ref={queryInput}
        />
      </form>
      <div className={classes["list-of-recipes"]}>
        {recipes.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ListOfRecipes;
