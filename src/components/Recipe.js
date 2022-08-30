import React from 'react'

const Recipe = (props) => {

  return (
    <div>
    <h1>{props.recipe.title}</h1>
    <img
      src={'https://spoonacular.com/recipeImages/'+ props.recipe.image}
      alt=''
      style={{ width: '100%', height: '300px' }}
    />
    <h2>Ready in : {props.recipe.readyInMinutes} + minutes</h2>
    <p>{props.recipe.sourceUrl}</p>
  </div>
  )
}

export default Recipe