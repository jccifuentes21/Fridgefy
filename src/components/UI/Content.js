import MyFridge from "./MyFridge";
import MyRecipes from "./MyRecipes";
import MyShoppingList from "./MyShoppingList";
import Cart from "./Cart";

import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={`${classes.container} ${classes['another-class']}`}>
      <MyFridge />
      {/* <MyRecipes /> */}
      <MyShoppingList />
      <Cart />
    </div>
  );
};

export default Content;
