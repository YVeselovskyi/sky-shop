import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { state, addUser, deleteUser } from './state';

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addUser={addUser} deleteUser={deleteUser} />
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
