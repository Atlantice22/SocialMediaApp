import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseContext from './firebase/firebase.js';
import { app, db } from './firebase/firebaseConfig.js';

ReactDOM.render(
  <firebaseContext.Provider value={{app, db}}>
    <App />
  </firebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
