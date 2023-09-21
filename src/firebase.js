// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDe-KGdR_z_RX_YZ3JaTuUb8QnbKurcd_E",
  authDomain: "auth-boss.firebaseapp.com",
  databaseURL: "https://auth-boss-default-rtdb.firebaseio.com",
  projectId: "auth-boss",
  storageBucket: "auth-boss.appspot.com",
  messagingSenderId: "415231593338",
  appId: "1:415231593338:web:f1437a5a94f0e869f8e4c3",
  measurementId: "G-CE77VC32BE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();

export {firebase, auth, database};