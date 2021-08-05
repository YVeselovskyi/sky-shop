import React from 'react';
import classes from './AdminPage.module.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Spinner } from '../Spinner/Spinner';

const AdminPage = () => (
  <div className={classes.appWrapper}>
    <Header />
    <Navbar />
    <Spinner />
  </div>
);

export { AdminPage };
