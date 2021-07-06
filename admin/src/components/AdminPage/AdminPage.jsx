import React from 'react';
import s from './AdminPage.module.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

const AdminPage = () => (
  <div className={s.appWrapper}>
    <Header />
    <Navbar />
  </div>
);

export { AdminPage };
