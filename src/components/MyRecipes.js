import React, { useEffect, useRef, useState } from 'react';

import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';

import { db } from '../Firebase';


export default function MyRecipes() {
    const recipesCollectionRef = collection(db, 'tbRecipe');
    const [error, setError] = useState('')

    const [recipes, setRecipes] = useState({
      list: [],
      isLoading: false,
    });
  
    const recipeNameRef = useRef();
    const recipeImage = useRef();
    const recipeID =  1; // useRef();
    const user =  1;  //useAuth();

    useEffect(() => {
        getMyRecipes();
      }, []);

 
    

//  GET MYRECIPES FUNCTION ====================
const getMyRecipes = async () => {
    const data = await getDocs(recipesCollectionRef);

    const MyRecipes = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log('MyRecipes', MyRecipes);

    setRecipes({
      ...recipes,
      list: MyRecipes,
    });
  };

//  INSERT MYRECIPE FUNCTION ====================
const createMyRecipe = (e) => {
    e.preventDefault();
    setRecipes({ ...recipes, isLoading: true });
    
    const recipe = {
      recipeID: recipeID,       // api.id
      userID: user,   // user.currentUser.uid,
      recipeName: recipeNameRef.current.value,              // api.title
      recipeImage: recipeNameRef.current.value + ".jpg",    // api.image
    //  ingredients : [], 
    };

    if (recipeNameRef.current.value === '') {
        setError('Error: Invalid recipe Name value');
        setRecipes({ ...recipes, isLoading: false });
        return;
      }

    // if (recipeID.current.value === '' || recipeID.current.value <= 0) {
    //     setError('Error: Invalid recipe ID value');
    //     setRecipes({ ...recipes, isLoading: false });
    //     return;
    //   }

    //console.log('recipe', recipe);

    addDoc(recipesCollectionRef, recipe)
      .then((res) => {
       // console.log('id', res.id);

        setRecipes({
          list: [...recipes.list, { ...recipe, id: res.id }],
          isLoading: false,
        });

        getMyRecipes();
        //console.log('error', error);
        //error && setError('');
      })
      .catch((err) => console.log('err', err));    
  };

//  DELETE MYRECIPE FUNCTION ====================
const deleteMyRecipe = async ( id) => {
    try {
      const RecipeDoc = doc(db, 'tbRecipe', id);
      await deleteDoc(RecipeDoc);
      await getMyRecipes();
    } catch (e) {
      console.log('error at deleting recipe', e);
    }
  };

  
  return (
    <div>
      <h4>My Recipes</h4>
      <form style={{ width: '90%', margin: 'auto' }}>
           <input ref={recipeNameRef} text=""></input>
       
           <button
              variant='success'
              type='submit'
              onClick={(e) => createMyRecipe(e)}
              disabled={recipes.isLoading}>
              AddMyRecipe
            </button>
      </form>

      <ul >
      <>
        {recipes.list.map((recipe, index) => (
          <li key={index} >
             <p>{recipe.recipeName}</p>
            <p>
            {' '}
            <button onClick={() => deleteMyRecipe(recipe.id)}>X</button>
            </p>
          </li>
        ))}
      </>
      </ul>
    </div>
  );
}