import { useContext } from "react";
import MyFridge from "../components/Fridge/MyFridge";
import UserRecipes from "../components/Recipes/UserRecipes";
import Container from "../components/UI/Container";
import ToBuySidebar from "../components/Recipes/ToBuySidebar";
import AuthContext from "../store/auth-context";

const MyShoppingList = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Container>
      {isLoggedIn && <MyFridge />}
      <UserRecipes />
        {isLoggedIn && <ToBuySidebar title="Items to buy" />}
    </Container>
  );
};

export default MyShoppingList;
