import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AdminPage } from './components/AdminPage/AdminPage';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
      <Route path="/admin" component={AdminPage} />
    </BrowserRouter>
  );
}
export default App;
