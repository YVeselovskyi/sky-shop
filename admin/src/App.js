import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminPage } from './components/AdminPage/AdminPage';

function App(props) {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <AdminPage state={props.state} addUser={props.addUser} deleteUser={props.deleteUser} />
    </BrowserRouter>
  );
}
export default App;
