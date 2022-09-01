import React, { useState } from "react";

const FilterContext = React.createContext({
  addFilterData: () => {},
  filterData: {},
});

export const FilterContextProvider = (props) => {
  const [filterData, setFilterData] = useState({
    diet: [],
    intolerances: [],
    cuisine: [],
    ingredients: [],
    query: [],
  });

  const addFilterDataHandler = (filterName, data) => {
    setFilterData((prevState) => {
      return { ...prevState, [filterName]: [data] };
    });
  };

  const contextValue = {
    filterData: filterData,
    addFilterData: addFilterDataHandler,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
