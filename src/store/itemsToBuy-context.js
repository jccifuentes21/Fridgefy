import React, { useState } from "react";

const ItemsToBuyContext = React.createContext({
  itemsToBuy: [],
  addItemsToBuy: () => {},
  clearItemsToBuy: () => {},
});

export const ItemsToBuyContextProvider = (props) => {
  const [itemsToBuy, setItemsToBuy] = useState([]);

  const addItemsToBuy = (items) => {
    setItemsToBuy((prevState) => {
      return [...prevState, ...items];
    });
  };

  const clearItemsToBuy = () => {
    setItemsToBuy([]);
  };

  const contextValue = {
    itemsToBuy,
    addItemsToBuy,
    clearItemsToBuy,
  };

  return (
    <ItemsToBuyContext.Provider value={contextValue}>
      {props.children}
    </ItemsToBuyContext.Provider>
  );
};

export default ItemsToBuyContext;
