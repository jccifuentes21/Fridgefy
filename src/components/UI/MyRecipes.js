import classes from './MyRecipes.module.css'
import RecipeQuery from '../Recipes/RecipeQuery'

const MyRecipes = () => {
  return (
    <div className={classes['recipes-sidebar']}>
      <div>My recipes</div>
      <RecipeQuery />
    </div>
  )
}

export default MyRecipes