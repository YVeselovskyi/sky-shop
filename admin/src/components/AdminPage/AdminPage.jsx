import React from 'react';
import s from './AdminPage.module.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

const AdminPage = (props) => (
  <div className={s.appWrapper}>
    <Header />
    {/* eslint-disable-next-line react/destructuring-assignment */}
    <Navbar state={props.state} addUser={props.addUser} deleteUser={props.deleteUser} />
  </div>
);

export { AdminPage };
