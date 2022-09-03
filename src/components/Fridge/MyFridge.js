import { useContext, useEffect, useRef, useState } from "react";
import classes from "./MyFridge.module.css";
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";
import axios from "axios";

const apiKey = `apiKey=${process.env.REACT_APP_apiKey}`;

const MyFridge = () => {
  const [ingredients, setIngredients] = useState([]);
  const { addFilterData, filterData, removeFromFilter } =
    useContext(FilterContext);
  const [ingredientsAutoComplete, setIngredientsAutoComplete] = useState({
    list: [],
  });
  const ingredientInput = useRef();

  //This is where we fetch the ingredients from the db and display them in the page
  // useEffect(() => {
  //   setIngredients( <<ingredients from db >> );
  // }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredIngredient = ingredientInput.current.value;

    setIngredients((prevState) => {
      return [...prevState, enteredIngredient];
    });
    ingredientInput.current.value = "";
  };

  const handleDelete = (ingredientTitle) => {
    setIngredients((prevState) => {
      return prevState.filter((item) => item !== ingredientTitle);
    });
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
  };

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <input
            placeholder="Add an ingredient..."
            onChange={(e) => handleChangeIngredient(e)}
            ref={ingredientInput}
          />

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

        {ingredients.map((ingredient, i) => {
          return (
            <FridgeItem
              key={`Ing-${i}`}
              title={ingredient}
              handleDelete={handleDelete}
              checkHandler={checkHandler}
            />
          );
        })}
        {ingredients.length > 0 && <p>Select items to filter the search</p>}
      </Sidebar>
    </>
  );
};

export default MyFridge;
