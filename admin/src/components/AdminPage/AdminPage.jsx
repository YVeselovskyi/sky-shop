/* eslint-disable react/destructuring-assignment */
import React from 'react';
import s from './AdminPage.module.css';
import { Header } from '../Header/Header';
// eslint-disable-next-line import/no-cycle
import { Navbar } from '../Navbar/Navbar';

const AdminPage = () => (
  <div className={s.appWrapper}>
    <Header />
    <Navbar />
  </div>
);

export { AdminPage };
