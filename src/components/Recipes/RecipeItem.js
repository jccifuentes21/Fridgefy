
const RecipeItem = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <img
        src={props.image}
        alt=""
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default RecipeItem;
