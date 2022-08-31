import React, { useEffect, useRef, useState } from 'react';

import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';

import { db } from '../Firebase';


export default function MyFridge() {
    const fridgeCollectionRef = collection(db, 'tbFridge');
    const [error, setError] = useState('')

    const [fridges, setFridge] = useState({
      list: [],
      isLoading: false,
    });
  
    const ingredientRef = useRef();
    const ingredientImageRef = useRef();
    const user =  1;  //useAuth();

    useEffect(() => {
        getMyFridge();
      }, []);

  

//  GET MYFRIDGE FUNCTION ====================
const getMyFridge = async () => {
    const data = await getDocs(fridgeCollectionRef);

    const MyFridge = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log('MyFridge', MyFridge);

    setFridge({
      ...fridges,
      list: MyFridge,
    });
  };

//  INSERT MYFRIDGE FUNCTION ====================
const createMyFridge = (e) => {
    e.preventDefault();
    // setFridge({ ...fridges, isLoading: true });
    
    if (ingredientRef.current.value === '') {
        setError('Error: Invalid ingredient Name value');
//        setFridge({ ...fridges, isLoading: false });
        return;
      }

    const fridge = {
      userID: user,   // user.currentUser.uid,
      ingredient: ingredientRef.current.value,                  //api.name
      ingredientImage: ingredientRef.current.value + ".jpg",    //api.image  
    };


    addDoc(fridgeCollectionRef, fridge)
      .then((res) => {
       // console.log('id', res.id);

        setFridge({
          list: [...fridges.list, { ...fridge, id: res.id }],
          isLoading: false,
        });

        getMyFridge();
      })
      .catch((err) => console.log('err', err));    
  };

//  DELETE MYFRIDGE FUNCTION ====================
const deleteMyFridge = async (id) => {
    try {
      const FridgeDoc = doc(db, 'tbFridge', id);
      await deleteDoc(FridgeDoc);
      await getMyFridge();
    } catch (e) {
      console.log('error at deleting fridge', e);
    }
  };

  const handleChangeIngredient = (e) => {
    const ingredientInput = e.target.value
    // api request autocomplete ingredient search
  }


  return (
    <div>
      <h4>My Fridge</h4>
      <form style={{ width: '90%', margin: 'auto' }}>
           {/* <input ref={ingredientRef} onChange={(e) =>handleChangeIngredient(e)} text=""></input> */}
           <input ref={ingredientRef}></input>

           <button
              variant='success'
              type='submit'
              onClick={(e) => createMyFridge(e)}
              disabled={fridges.isLoading}>
              AddMyFridge
            </button>
      </form>

      <ul >
      <>
        {fridges.list.map((fridge, index) => (
          <li key={index} >
             <p>{fridge.ingredient}</p>
            <p>
            {' '}
            <button onClick={() => deleteMyFridge(fridge.id)}>X</button>
            </p>
          </li>
        ))}
      </>
      </ul>
    </div>
  );
}