import { useContext } from "react";
import MyFridge from "../components/Fridge/MyFridge";
import Container from "../components/UI/Container";
import Sidebar from "../components/UI/Sidebar";
import AuthContext from "../store/auth-context";

const MyShoppingList = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Container>
      {isLoggedIn && <MyFridge />}
      {isLoggedIn && <Sidebar title="Items to buy" />}
    </Container>
  );
};

export default MyShoppingList;
