import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPott-j6Bb49I3uNfiwx4Bgbp4Q-4dzTA",
  authDomain: "dash-9e22e.firebaseapp.com",
  projectId: "dash-9e22e",
  storageBucket: "dash-9e22e.appspot.com",
  messagingSenderId: "786137925738",
  appId: "web:ca7cc613b6a8d50e35a213",
};
firebase.initializeApp(firebaseConfig); //initializing app

export const db = firebase.firestore();
export const auth = getAuth();
export const fileStorage = firebase.storage();
