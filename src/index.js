import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import FirebaseContext from './tools/context'
import FirebaseClass from './tools/firebaseConfig'

ReactDOM.render(
  <FirebaseContext.Provider value={new FirebaseClass()}>  
    <App />                                           
  </FirebaseContext.Provider>,                        

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
