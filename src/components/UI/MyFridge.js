import { useRef } from "react";
import { useDispatch } from "react-redux";

import classes from "./MyFridge.module.css";
import { recipeActions } from "../../store/recipe-slice";

const MyFridge = () => {

  const dispatch = useDispatch();
  const ingredientInput = useRef();

  const submitHandler = (event) =>{
    event.preventDefault()

    const enteredIngredient = ingredientInput.current.value;

    dispatch(recipeActions.addToFridge(enteredIngredient));


  }

  return (
    <>
      <div className={classes["recipes-sidebar"]}>
        My Fridge
        <form onSubmit={submitHandler}>
          <input ref={ingredientInput}/>
          <button>Add to fridge</button>
        </form>
      </div>
    </>
  );
};

export default MyFridge;
