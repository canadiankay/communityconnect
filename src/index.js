import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAklq0wnnudMpawKMgm-gdxHuU6lnBoP1E",
  authDomain: "hackathon-c6dd8.firebaseapp.com",
  projectId: "hackathon-c6dd8",
  storageBucket: "hackathon-c6dd8.appspot.com",
  messagingSenderId: "796063776156",
  appId: "1:796063776156:web:d2d66c2cc84e46ea8d9c59",
  measurementId: "G-YMMJ90NTS8"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

