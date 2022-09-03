import classes from './RecipeItem.module.css'

const RecipeItem = (props) => {
  const onAdd = () =>{
    props.onAdd({
      id: props.id,
      title: props.title,
      image: props.image
    })
  }
  return (
    <div className={classes["box-recipe"]}>
      <img className={classes.image} src={props.image} />
      <div className={classes["more-infos"]}>
        {" "}
        <span>{props.title} </span>{" "}
        <button onClick={onAdd}>
          <img src="./images/btn-add.png" />
        </button>
      </div>
    </div>
  );
};

export default RecipeItem;
