import classes from './RecipeItem.module.css'

const RecipeItem = (props) => {
  return (
    <div className={classes["box-recipe"]}>
      <img className={classes.image} src={props.image} />
      <div className={classes["more-infos"]}>
        {" "}
        <span>{props.title} </span>{" "}
        <button>
          <img src="./images/btn-add.png" />
        </button>
      </div>
    </div>
  );
};

export default RecipeItem;
