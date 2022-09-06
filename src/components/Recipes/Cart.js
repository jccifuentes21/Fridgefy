import classes from "./Cart.module.css";
import Sidebar from "../UI/Sidebar";
import RecipeCartItem from "./RecipeCartItem";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const Cart = (props) => {
  const { userRecipes, removeRecipe } = useContext(UserContext);

  const handleDelete = (recipe) =>{
    removeRecipe(recipe)
  }
  return (
    <Sidebar title="Cart">
      <ul>
        {userRecipes.map((recipe) => {
          return (
            <RecipeCartItem
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </Sidebar>
  );
};

export default Cart;
