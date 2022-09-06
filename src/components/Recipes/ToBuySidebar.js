import { useContext, useEffect, useState } from "react";
import ItemsToBuyContext from "../../store/itemsToBuy-context";
import UserContext from "../../store/user-context";
import Sidebar from "../UI/Sidebar";

const ItemsToBuySidebar = (props) => {
  const { itemsToBuy } = useContext(ItemsToBuyContext);
  const { userIngredients } = useContext(UserContext);
  const [itemsToBuyFiltered, setItemsToBuyFiltered] = useState([]);

  useEffect(() => {
    if (userIngredients.length !== 0) {
      setItemsToBuyFiltered(
        itemsToBuy.filter((item) => !userIngredients.includes(item))
      );
    } else {
      setItemsToBuyFiltered(itemsToBuy);
    }
  }, [userIngredients, itemsToBuy]);

  return (
    <Sidebar title="Items to buy">
      <ul>
        {itemsToBuyFiltered.length > 0 &&
          itemsToBuyFiltered.map((item, index) => {
            return <li key={`tb-${index}`}>{item}</li>;
          })}
      </ul>
    </Sidebar>
  );
};

export default ItemsToBuySidebar;
