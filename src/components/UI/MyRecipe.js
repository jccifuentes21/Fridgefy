import React, {useState} from "react";
import classes from './MyShoppingList.module.css'

const MyRecipe = () => {
    const [isOpen, setIsOpen] = useState (false)
    return(
        <>
            <button className={classes["accordion"]} onClick={() =>{setIsOpen(!isOpen)}}>World's Best Lasagna <img src="./images/close.png"/></button>
            <div className={!isOpen&&classes["panel"]}>
                <div className={classes["recipe-list"]}>
                    <div>
                        <h2>Recipe</h2>
                        <ul>
                            <li>1 pound sweet Italian sausage¾ pound lean ground beef</li>
                            <li>½ cup water</li>
                            <li>2 tablespoons white sugar</li>
                            <li>1½ teaspoons dried basil leaves</li>
                            <li>½ teaspoon fennel seeds</li>
                            <li>1 teaspoon Italian seasoning</li>
                            <li>1½ teaspoons salt, divided, or to taste</li>
                            <li>¼ teaspoon ground black pepper</li>
                            <li>4 tablespoons chopped fresh parsley</li>
                            <li>12 lasagna noodles</li>
                            <li>16 ounces ricotta cheese</li>
                            <li>1 egg</li>
                            <li>¾ pound mozzarella cheese, sliced</li>
                        </ul>
                    </div>
                    <div><img src="./images/recipe.png"/></div>
                </div>    
            </div>


        </>
    )
}

export default MyRecipe;