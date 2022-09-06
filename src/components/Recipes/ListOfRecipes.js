import useFetchRecipes from "../../hooks/use-fetchRecipes";
import { useContext, useEffect, useRef, useState } from "react";
import { db } from "../../store/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import FilterContext from "../../store/filters-context";

import RecipeItem from "./RecipeItem";
import Container from "../UI/Container";
import classes from "./ListOfRecipes.module.css";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";
import FilterItem from "./FilterItem";

const ListOfRecipes = () => {
  const {
    filterData,
    updateQuery,
    clearAllFilters,
    addFilterData,
    removeFromFilter,
  } = useContext(FilterContext);
  const {
    userRecipes,
    addRecipe,
    setRecipes: setUserRecipes,
  } = useContext(UserContext);
  const { isLoggedIn, UID } = useContext(AuthContext);
  const queryInput = useRef();
  let userDocRef;

  const cuisines = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const diets = [
    "GlutenFree",
    "Ketogenic",
    "Vegetarian",
    "Lacto Vegetarian",
    "Ovo Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "LowFODMAP",
    "Whole30",
  ];

  const intolerances = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ];

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
    return () => {
      if (userRecipes.length === 0 && isLoggedIn) {
        updateDoc(userDocRef, { recipes: [] });
      }
    };
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
  };

  const filterCheckHandler = (title, type, isChecked) => {
    if (isChecked) {
      addFilterData(type, title);
    } else {
      removeFromFilter(type, title);
    }
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
      <div className={classes.filters}>
        <h2>Filters</h2>
        <div className={classes["filter-header"]}>
          <h3>Cuisine</h3>
          <ul className={classes["filter-container"]}>
            {cuisines.map((cuisine, index) => {
              return (
                <FilterItem
                  key={`fil-${index}`}
                  title={cuisine}
                  filterCheckHandler={filterCheckHandler}
                  type="cuisine"
                />
              );
            })}
          </ul>
        </div>
        <div className={classes["filter-header"]}>
          <h3>Diet</h3>
          <ul className={classes["filter-container"]}>
            {diets.map((diet, index) => {
              return (
                <FilterItem
                  key={`fil-${index}`}
                  title={diet}
                  filterCheckHandler={filterCheckHandler}
                  type="diet"
                />
              );
            })}
          </ul>
        </div>
        <div className={classes["filter-header"]}>
          <h3>Intolerances</h3>
          <ul className={classes["filter-container"]}>
            {intolerances.map((intolerance, index) => {
              return (
                <FilterItem
                  key={`fil-${index}`}
                  title={intolerance}
                  filterCheckHandler={filterCheckHandler}
                  type="intolerances"
                />
              );
            })}
          </ul>
        </div>
      </div>
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
