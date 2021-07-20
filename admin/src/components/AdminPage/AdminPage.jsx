import React from 'react';
import classes from './AdminPage.module.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

const AdminPage = () => (
  <div className={classes.appWrapper}>
    <Header />
    <Navbar />
  </div>
);

export { AdminPage };
