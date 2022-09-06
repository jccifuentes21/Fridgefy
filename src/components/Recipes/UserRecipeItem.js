import { useState, useEffect, useContext } from "react";
import AuthContext from "../../store/auth-context";
import ItemsToBuyContext from "../../store/itemsToBuy-context";
import classes from "./UserRecipeItem.module.css";

const UserRecipeItem = ({ title, image, id }) => {
  const { addItemsToBuy, clearItemsToBuy } =
    useContext(ItemsToBuyContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const apiKey = process.env.REACT_APP_apiKey;
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`;
  const [recipeInfo, setRecipeInfo] = useState({
    ingredients: [],
    readyInMinutes: "",
    servings: "",
  });

  //Make a fetch for the specifics of the recipe
  const fetchRecipeData = async () => {
    const recipeIngredients = [];
    const response = await fetch(url);

    const data = await response.json();

    data.extendedIngredients.forEach((ingredient) => {
      recipeIngredients.push(ingredient.name);
    });

    addItemsToBuy(recipeIngredients);
    formatRecipeInfo(data);
  };

  const formatRecipeInfo = (data) => {
    const ingredients = [];
    data.extendedIngredients.forEach((ingredient) => {
      ingredients.push(ingredient.name);
    });
    setRecipeInfo({
      ingredients: ingredients,
      readyInMinutes: data.readyInMinutes,
      servings: data.servings,
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchRecipeData();
    }
    return () => {
      clearItemsToBuy();
    };
  }, [isLoggedIn]);

  return (
    <>
      <button
        className={classes["accordion"]}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title} <img alt={`Image of recipe to make ${title}`} src={image} />
      </button>
      <div className={!isOpen && classes["panel"]}>
        <div className={classes["recipe-list"]}>
          <div className={classes['recipe-details']}>
            <div>
              <h2>Ingredients</h2>
              <ul>
                {recipeInfo.ingredients.length > 0 &&
                  recipeInfo.ingredients.map((ingredient, index) => {
                    return <li key={`rii-${index}`}>{ingredient}</li>;
                  })}
              </ul>
            </div>
            <div>
              <h3>Servings</h3>
              <p>{`${recipeInfo.servings} servings`}</p>
              <h3>Ready in:</h3>
              <p>{`${recipeInfo.readyInMinutes} minutes`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRecipeItem;
