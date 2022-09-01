import classes from './MyRecipes.module.css'

const MyRecipes = () => {
  return (
    <div className={classes['recipes-sidebar']}>
          <form>
            <input type="search" placeholder="Search for..."/>
          </form>

        <div className={classes['filter']}>
        </div>

      <div className={classes['recipes']}>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
      </div>
      <div className={classes['recipes']}>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
      </div>
      <div className={classes['recipes']}>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
        <div className={classes['box-recipe']}>
         <img src="./images/lasanha.png"/>
         <div className={classes['more-infos']}>  <span>ADD to my recipe </span> <button><img src="./images/btn-add.png"/></button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default MyRecipes