
const RecipeItem = (props) => {
  const { recipeId } = props.recipeId;

  return (
    <div>
      <h1>{props.title}</h1>
      <img
        src={"https://spoonacular.com/recipeImages/" + props.image}
        alt=""
        style={{ width: "100%", height: "300px" }}
      />
      <h2>Ready in : {props.readyInMinutes} + minutes</h2>
      <p>{props.url}</p>
    </div>
  );
};

export default RecipeItem;
