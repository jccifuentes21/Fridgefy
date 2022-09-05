import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../store/Firebase";

import classes from "./MyFridge.module.css";
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";
import axios from "axios";


const apiKey = `apiKey=${process.env.REACT_APP_apiKey}`;

const MyFridge = () => {
  const { userIngredients, setIngredients, addIngredient, removeIngredient } =
    useContext(UserContext);
  const { addFilterData, removeFromFilter } = useContext(FilterContext);
  const { UID } = useContext(AuthContext);
  const userDocRef = doc(db, "tbUsers", UID);

  const ingredientInput = useRef();
  const [ingredientsAutoComplete, setIngredientsAutoComplete] = useState({
    list: [],
  });

  const getUserFridge = async () => {
    const data = await getDoc(userDocRef);

    if (data.exists()) {
      if (data.data().ingredients) {
        setIngredients(data.data().ingredients);
        console.log(data.data().ingredients);
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
  }, [userIngredients]);



  const submitHandler = (event) => {
    event.preventDefault();

    const enteredIngredient = ingredientInput.current.value;

    addIngredient(enteredIngredient);

    ingredientInput.current.value = "";

    setIngredientsAutoComplete({
      list: [],
    });
  };

  const handleDelete = (ingredientTitle) => {
    removeIngredient(ingredientTitle);
    console.log(`Delete this ${ingredientTitle} !`);
  };

  const checkHandler = (isChecked, ingredientTitle) => {
    if (isChecked) {
      addFilterData("ingredients", ingredientTitle);
    }
    if (!isChecked) {
      removeFromFilter("ingredients", ingredientTitle);
    }
  };


  //GET AUTOCOMPLETE INGREDIENTS FUNCTION
  const getIngredientsByAutoComplete = (ingredientTyped) => {
    axios
      .get(
        "https://api.spoonacular.com/food/ingredients/autocomplete?" +
          apiKey +
          "&query=" +
          ingredientTyped +
          "&number=5"
      )
      .then((response) => {
        console.log(response.data);
        const dataG = response.data;
        setIngredientsAutoComplete({
          list: dataG,
        });
        console.log("testing parse data", ingredientsAutoComplete.list);
      });
  };

  const handleChangeIngredient = (e) => {
    const ingredientInput = e.target.value;
    // api request autocomplete ingredient search
    console.log("ingredient type..." + ingredientInput);
    getIngredientsByAutoComplete(ingredientInput);
  };

  const handleHelperAutoComplete = (e) => {
    ingredientInput.current.value = e;
    setIngredientsAutoComplete({list: []})
  };

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <input placeholder="Add an ingredient..." onChange={(e) => handleChangeIngredient(e)} ref={ingredientInput} />
          <button>Add</button>
        </form>

        <ul>
          {ingredientsAutoComplete.list.map((ingredient, index) => (
            <li key={index}>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                  border: "1px solid #FFBD00",
                  paddingTop: "10px",
                }}
                onClick={() => handleHelperAutoComplete(ingredient.name)}
              >
                {ingredient.name}
              </button>
            </li>
          ))}
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
