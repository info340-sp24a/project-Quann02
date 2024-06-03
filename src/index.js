// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUTLqvMOe61sjDSZ_EMEh8Q4YyQ1ro-do",
  authDomain: "infinity-14b41.firebaseapp.com",
  databaseURL: "https://infinity-14b41-default-rtdb.firebaseio.com",
  projectId: "infinity-14b41",
  storageBucket: "infinity-14b41.appspot.com",
  messagingSenderId: "477162378027",
  appId: "1:477162378027:web:7c4c9292323f4268226b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

export { storage, database };

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Keeps track of the current URL in its state, and re-renders
  // descendant components if that changes.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);