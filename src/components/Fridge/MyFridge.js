import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../store/Firebase";

import classes from "./MyFridge.module.css";
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";

const apiKey = process.env.REACT_APP_apiKey;

const MyFridge = () => {
  const { userIngredients, setIngredients, addIngredient, removeIngredient } =
    useContext(UserContext);
  const { addFilterData, removeFromFilter } = useContext(FilterContext);
  const { UID } = useContext(AuthContext);
  const [completeIngredients, setCompleteIngredients] = useState([]);
  const userDocRef = doc(db, "tbUsers", UID);

  const ingredientInput = useRef();

  const getUserFridge = async () => {
    const data = await getDoc(userDocRef);

    if (data.exists()) {
      if (data.data().ingredients) {
        setIngredients(data.data().ingredients);
      }
    }
  };

  //This is where we fetch the ingredients from the db and display them in the page
  useEffect(() => {
    getUserFridge();
  }, []);

  useEffect(() => {
    if (userIngredients.length !== 0) {
      updateDoc(userDocRef, { ingredients: userIngredients });
    }
    return () => {
      if (userIngredients.length === 0) {
        updateDoc(userDocRef, { ingredients: [] });
      }
    };
  }, [userIngredients]);

  const getCompleteIngredients = async (ingredient) => {
    const url = `https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${apiKey}&query=${ingredient}&number=5`;

    const response = await fetch(url);
    const result = [];

    try {
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      data.forEach((ingredient) => result.push(ingredient.name));
      setCompleteIngredients(result);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredIngredient = ingredientInput.current.value;

    if (enteredIngredient.trim().length !== 0) {
      addIngredient(enteredIngredient);

      ingredientInput.current.value = "";
      setCompleteIngredients([]);
    }
  };

  const handleDelete = (ingredientTitle) => {
    removeIngredient(ingredientTitle);
  };

  const checkHandler = (isChecked, ingredientTitle) => {
    if (isChecked) {
      addFilterData("ingredients", ingredientTitle);
    }
    if (!isChecked) {
      removeFromFilter("ingredients", ingredientTitle);
    }
  };
  const changeHandler = (event) => {
    const enteredInput = event.target.value;
    getCompleteIngredients(enteredInput);
  };
  const handleAutocomplete = (ingredient) => {
    ingredientInput.current.value = ingredient;
    setCompleteIngredients([]);
  };

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <input
            placeholder="Add an ingredient..."
            ref={ingredientInput}
            onChange={changeHandler}
            required
          />
          <button>Add</button>
        </form>
        <ul className={classes.autocomplete}>
          {completeIngredients.map((ingredient, index) => {
            return (
              <li key={index}>
                <button onClick={() => handleAutocomplete(ingredient)}>
                  {ingredient}
                </button>
              </li>
            );
          })}
        </ul>
        <ul>
          {userIngredients.length > 0 &&
            userIngredients.map((ingredient, i) => {
              return (
                <FridgeItem
                  key={`Ing-${i}`}
                  title={ingredient}
                  handleDelete={handleDelete}
                  checkHandler={checkHandler}
                />
              );
            })}
        </ul>
        {userIngredients.length > 0 && <p>Select items to filter the search</p>}
      </Sidebar>
    </>
  );
};

export default MyFridge;
