import React, { useState } from "react";

const FilterContext = React.createContext({
  addFilterData: () => {},
  clearAllFilters: () => {},
  clearFilter: () => {},
  removeFromFilter: () => {},
  updateQuery: () => {},
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

  const addFilterData= (filterName, data) => {
    setFilterData((prevState) => {
      return { ...prevState, [filterName]: [...prevState[filterName], data] };
    });
  };

  const updateQuery = (data) => {
    setFilterData((prevState) => {
      return { ...prevState, query: data };
    });
  };

  const clearAllFilters = () => {
    setFilterData({
      diet: [],
      intolerances: [],
      cuisine: [],
      ingredients: [],
      query: [],
    });
  };

  const clearFilter = (filterName) => {
    setFilterData((prevState) => {
      return { ...prevState, [filterName]: [] };
    });
  };

  const removeFromFilter = (filterName, data) => {
    setFilterData((prevState) => {
      return {
        ...prevState,
        [filterName]: [...prevState[filterName].filter((item) => item != data)],
      };
    });
  };

  const contextValue = {
    filterData: filterData,
    addFilterData,
    clearAllFilters,
    clearFilter,
    removeFromFilter,
    updateQuery,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
