import { useState } from "react";
import classes from "./FridgeItem.module.css";

const FridgeItem = (props) => {
  const [canDelete, setCanDelete] = useState(true)
  const handleDelete = () => {
    if(canDelete){
      props.handleDelete(props.title);
    }
    if(!canDelete){
      alert("You can't remove the item if it is selected!")
    }
  };

  const checkHandler = (event) => {
    const isChecked = event.target.checked;
    setCanDelete(!isChecked)
    props.checkHandler(isChecked, props.title)
  }



  return (
    <li>
      <input onChange={checkHandler} className={classes.checkbox} type='checkbox'/>
      <p>{props.title}</p>{" "}
      <button onClick={handleDelete}>
        <img src="./images/close.png" />
      </button>
    </li>
  );
};

export default FridgeItem;
