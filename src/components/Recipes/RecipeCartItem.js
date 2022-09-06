import classes from './RecipeCartItem.module.css'

const RecipeCartItem = (props) => {
  const handleDelete = () => {
    props.handleDelete({
      id: props.id,
      title: props.title,
      image: props.image
    })
  };
  return (
    <li>
      <div className={classes['recipe-group']}>
        {props.title}
        <button onClick={handleDelete}>
          <img src="./images/close.png" />
        </button>
      </div>
    </li>
  );
};

export default RecipeCartItem;
