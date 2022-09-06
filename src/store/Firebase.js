import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FirebaseApiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

//This represent all of the firebase connections
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = (login, action) =>{
  signInWithPopup(auth, provider)
      .then((result) => {
        login(result.user);
        action()
      })
      .catch((err) => {
        console.log("Error", err);
      });
}

export const signUserOut = (logout) => {
  signOut(auth)
    .then(() => {
      logout();
      console.log("User has signed out");
    })
    .catch((err) => {
      console.log("An error happened");
    });
};

export const getUserData = () =>{
  const user = auth.currentUser;

  if(user){
    console.log(user)
    return user
  } else {
    console.log("No user logged in !")
    return false;
  }
}
