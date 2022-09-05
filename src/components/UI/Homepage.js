import MyFridge from "./MyFridge";
import MyRecipes from "./MyRecipes";
import MyShoppingList from "./MyShoppingList";
import Cart from "./Cart";

import classes from "./Homepage.module.css";

const Content = () => {
  return (
    <div className={`${classes.container} ${classes['another-class']}`}>
        <div>
            <h1>Lorem Ipsum is simply dummy text of the printing.</h1>
            <button>See Recipes</button>
        </div>
    </div>
  );
};

export default Content;
