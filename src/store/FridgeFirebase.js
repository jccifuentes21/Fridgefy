import React, { useContext, useEffect } from "react";

import { db } from "./Firebase";
import AuthContext from "./auth-context";
import { doc, setDoc } from "firebase/firestore";

export default function MyFridge() {
  const { UID } = useContext(AuthContext);
  // const fridgeCollectionRef = collection(db, "tbFridge");

  const handleClick = () =>{
    setDoc(doc(db, "tbFridge", `${UID}`), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });

  }

  // Add a new document in collection "cities"

  return <button onClick={handleClick}>Send the data</button>;
}
