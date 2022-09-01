import MyFridge from "./MyFridge";
import MyRecipes from "./MyRecipes";
import Cart from "./Cart";

import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={`${classes.container} ${classes['another-class']}`}>
      <MyFridge />
      <MyRecipes />
      <Cart />
    </div>
  );
};

export default Content;
