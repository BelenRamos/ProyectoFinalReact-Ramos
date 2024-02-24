import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdobsNsDlCCgythhPBz1nXP3812vqXtM",
  authDomain: "issadora-e-commerce.firebaseapp.com",
  projectId: "issadora-e-commerce",
  storageBucket: "issadora-e-commerce.appspot.com",
  messagingSenderId: "697867997801",
  appId: "1:697867997801:web:01640df3877cdad69548f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

