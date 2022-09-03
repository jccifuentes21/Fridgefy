import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { doc, DocumentSnapshot, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../store/Firebase";

import classes from "./MyFridge.module.css";
import Sidebar from "../UI/Sidebar";
import FridgeItem from "./FridgeItem";
import FilterContext from "../../store/filters-context";
import AuthContext from "../../store/auth-context";
import UserContext from "../../store/user-context";

const MyFridge = () => {
  // const [ingredients, setIngredients] = useState([]);
  const { userIngredients, setIngredients, addIngredient, removeIngredient } =
    useContext(UserContext);
  const { addFilterData, removeFromFilter } = useContext(FilterContext);
  const { UID } = useContext(AuthContext);
  const userDocRef = doc(db, "tbUsers", UID);

  const ingredientInput = useRef();

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
      setDoc(userDocRef, { ingredients: userIngredients });
    }
    return () => {
      console.log("unmounted");
    };
  }, [userIngredients]);

  // useEffect(() => {
  // }, [ingredients]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredIngredient = ingredientInput.current.value;

    addIngredient(enteredIngredient);

    // setDoc(userDocRef, { ingredients: ingredients });
    ingredientInput.current.value = "";
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

  return (
    <>
      <Sidebar title="My Fridge">
        <form className={classes["form-control"]} onSubmit={submitHandler}>
          <input placeholder="Add an ingredient..." ref={ingredientInput} />
          <button>Add</button>
        </form>
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
