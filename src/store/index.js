//ALL REDUX LOGIC GOES HERE
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from './recipe-slice'


const store = configureStore({
  // reducer: { all the slice reducers would go here !}
  reducer: {recipes: recipeReducer}
})

export default store;