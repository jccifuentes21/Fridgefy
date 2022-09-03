import classes from './MyShoppingList.module.css'
import MyRecipe from './MyRecipe';

const MyRecipes = () => {
  return (
    <div className={classes['shopping-list']}>
        <MyRecipe/>
        <MyRecipe/>
        <MyRecipe/>
        <MyRecipe/>
    </div>
  )
}

export default MyRecipes