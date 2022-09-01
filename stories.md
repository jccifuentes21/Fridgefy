# Stories

Welcome page:
-User should be able to click on the "Go to recipes button"
-User should be able to log into his account

All users page:
-User should be able to search for recipes with the input  (useRef for logging the user input)
-User should be able to filter the recipes with the existing filters (cuisine, diet or intolerances)
-User should be able to log into his account
-No "recipes" or "My shopping list" buttons on the nav bar
-User should be able to click on the recipe and see the recipe details
  -When the user click "See details" button of the recipe, the route should be recipes/:recipeId (recipe detail component)

Logged users page:
-All the features from the "All users page" plus;
  -The buttons Recipes and My shopping list are now enabled
  -Inside the Logged user + recipes page user should see:
    -My fridge, contaning all the items the user has on their fridge
        -User should be able to use the "my Fridge" colum which allows them to add items (from the API and sent to firebase) to their online fridge (fridgeIngredients array) (useRef for this)
        -User should be able to select the fridge items to filter the search
    -Search bar, filters and recipes results
    -My recipes (user selected recipes)
        -A new state should be created, (selectedRecipes array of objects)
        -User should see their "cart" with selected recipes, and they should also be stored in firebase (selectedRecipes)

  -Inside the Logged user + My shopping list page user should see:
    -My fridge column, contaning all the items the user has on their fridge
    -Center column (content) now includes selectedRecipesDetail
      -A new state should be created, (selectedRecipesIngredients array) with all the ingredients from selectedRecipes state
    -Items to buy column
      -A new state should be created, (missingIngredients array) with all the ingredients that are missing for all the selectedRecipes vs fridgeIngredients

Pages:
-Home page
-Recipes page
  All Users:
    -NEEDS TO KNOW => (isLoggedin state, recipes array)
    -Show all the recipes from the search query with filters
    -Only show the cuisine, diet and intolerances filters
    -Show log in button
    -Hide the recipes and my shopping list buttons
  
  Logged in Users
    -Show the recipes and my shopping list buttons
    -Show all the recipes from the search query
    -Show the fridge sidebar with ability to add items to the fridge, which also add items to the database
    -Add the ability to check these items, and if checked, add them to the filters
    -Ability to add recipes to the 'shopping cart'
    -Show log out button
  
-My shopping list page
  ONLY for logged in users
    -Same fridge items, without the check
    -Show the recipes in more detail
    -right column is now Items to buy, which will compare what you have vs the ingredients from the recipes

state variables:
PENDING ALL AUTH VARIABLES
Temporary variable (isLoggedIn)

-fridgeIngredients = []
-searchQuery
-filtersFromFridge = [] (this is going to be the items checked from the fridge column)
-recipeResults = [{}]
-filters = [...filtersFromFridge, ]





