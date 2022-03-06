import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseapikey = process.env.REACT_APP_FIREBASE;

const firebaseConfig = {
  apiKey: firebaseapikey,
  authDomain: "hackathon-c6dd8.firebaseapp.com",
  projectId: "hackathon-c6dd8",
  storageBucket: "hackathon-c6dd8.appspot.com",
  messagingSenderId: "796063776156",
  appId: "1:796063776156:web:d2d66c2cc84e46ea8d9c59",
  measurementId: "G-YMMJ90NTS8"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);