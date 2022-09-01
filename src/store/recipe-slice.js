import { createSlice } from "@reduxjs/toolkit";

const initialRecipeState = {
  recipes: [],
};


const recipeSlice = createSlice({
  name: "recipes",
  initialState: initialRecipeState,
  reducers: {
    setRecipes(state, action) {
      state.recipes = action.payload.recipes;
    },
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice.reducer;
