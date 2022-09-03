import { useContext, useEffect, useRef, useState } from "react";

import classes from './MyFridge.module.css'
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";

const MyFridge = () => {
  const [ingredients, setIngredients] = useState([]);
  const { addFilterData, filterData, removeFromFilter  } = useContext(FilterContext);

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
    setIngredients((prevState)=>{
      return prevState.filter(item=> item !== ingredientTitle)
    })
    console.log(`Delete this ${ingredientTitle} !`);
  };

  const checkHandler = (isChecked, ingredientTitle) => {
    if(isChecked){
      addFilterData("ingredients", ingredientTitle);
    } 
    if(!isChecked){
      removeFromFilter("ingredients", ingredientTitle)
    }
  };

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes['form-control']} onSubmit={submitHandler}>
          <input placeholder="Add an ingredient..." ref={ingredientInput} />

          <button>Addd</button>
        </form>
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
