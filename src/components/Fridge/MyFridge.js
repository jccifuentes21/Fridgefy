import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../store/Firebase";

import classes from "./MyFridge.module.css";
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";
import AuthContext from "../../store/auth-context";

const MyFridge = () => {
  const [ingredients, setIngredients] = useState([]);
  const { addFilterData, removeFromFilter } = useContext(FilterContext);
  const { UID } = useContext(AuthContext);
  const userDocRef = doc(db, "tbUsers", UID);

  const ingredientInput = useRef();

  const getUserFridge = async() =>{

    const data = await getDoc(userDocRef)

    if(data.exists()){
      if(data.data().ingredients){

        setIngredients(data.data().ingredients)
        console.log(data.data().ingredients)
      }
    }
  }

  //This is where we fetch the ingredients from the db and display them in the page
  useEffect(() => {
    getUserFridge()
  }, []);
  
  useEffect(() => {
    return ()=>{
      setDoc(userDocRef, { ingredients: ingredients });
    }
  }, [ingredients]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredIngredient = ingredientInput.current.value;

    
    setIngredients((prevState) => {
      return [...prevState, enteredIngredient];
    });

    // setDoc(userDocRef, { ingredients: ingredients });
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

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <input placeholder="Add an ingredient..." ref={ingredientInput} />
          <button>Add</button>
        </form>
        {ingredients.length > 0 && ingredients.map((ingredient, i) => {
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
