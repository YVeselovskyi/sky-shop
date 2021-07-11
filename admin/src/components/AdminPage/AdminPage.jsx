/* eslint-disable react/destructuring-assignment */
import React from 'react';
import s from './AdminPage.module.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

const AdminPage = (props) => (
  <div className={s.appWrapper}>
    <Header />
    <Navbar
      state={props.state}
      addUser={props.addUser}
      deleteUser={props.deleteUser}
      addProduct={props.addProduct}
      removeProduct={props.removeProduct}
    />
  </div>
);

export { AdminPage };
