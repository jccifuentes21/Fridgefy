import useFetchRecipes from "../../hooks/use-fetchRecipes";
import { useContext, useEffect, useRef, useState } from "react";
import { db } from "../../store/Firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import FilterContext from "../../store/filters-context";

import RecipeItem from "./RecipeItem";
import Container from "../UI/Container";
import classes from "./ListOfRecipes.module.css";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";

const ListOfRecipes = () => {
  const { filterData, updateQuery, clearAllFilters } =
    useContext(FilterContext);
  const {
    userRecipes,
    addRecipe,
    setRecipes: setUserRecipes,
  } = useContext(UserContext);
  const { isLoggedIn, UID } = useContext(AuthContext);
  const queryInput = useRef();
  let userDocRef;

  if (UID) {
    userDocRef = doc(db, "tbUsers", UID);
  }

  const { sendRequest } = useFetchRecipes();
  const [recipes, setRecipes] = useState([]);

  const getUserRecipes = async () => {
    const data = await getDoc(userDocRef);

    if (data.exists()) {
      if (data.data().recipes) {
        setUserRecipes(data.data().recipes);
        console.log(data.data().recipes);
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getUserRecipes();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      if (userRecipes.length !== 0) {
        updateDoc(userDocRef, { recipes: userRecipes });
      }
    }
  }, [userRecipes]);

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

  useEffect(() => {
    clearAllFilters();
    setTimeout(() => {
      sendRequest(filterData, transformData);
    }, 150);
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    sendRequest(filterData, transformData);
  };

  const changeHandler = (event) => {
    const queryData = event.target.value.split(" ");

    updateQuery(queryData);
  };

  const addRecipeHandler = (recipeInfo) => {
    addRecipe(recipeInfo);
    console.log("Add recipe " + recipeInfo.title);
  };

  return (
    <Container
      classes={`${classes["main-container"]} ${
        isLoggedIn ? classes.isLogged : classes.isNotLogged
      }`}
    >
      <form className={classes["form-control"]} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          onChange={changeHandler}
          ref={queryInput}
        />
        <button>Search</button>
      </form>
      <div className={classes["list-of-recipes"]}>
        {recipes.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              onAdd={addRecipeHandler}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ListOfRecipes;
