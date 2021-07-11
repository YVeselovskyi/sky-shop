/* eslint-disable react/destructuring-assignment */
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminPage } from './components/AdminPage/AdminPage';

function App(props) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <AdminPage
        state={props.state}
        addUser={props.addUser}
        deleteUser={props.deleteUser}
        addProduct={props.addProduct}
        removeProduct={props.removeProduct}
      />
    </BrowserRouter>
  );
}
export default App;
