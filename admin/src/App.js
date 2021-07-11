import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AdminPage } from './components/AdminPage/AdminPage';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <AdminPage />
    </BrowserRouter>
  );
}
export default App;
