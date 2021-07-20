import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Backdrop } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const Spinner = () => {
  const usersIsLoading = useSelector((state) => state.users.isLoading);
  const productsIsLoading = useSelector((state) => state.products.isLoading);
  const classes = makeStyles(() => ({
    backdrop: {
      zIndex: 10001,
      color: '#fff',
    },
  }))();
  return (
    <Backdrop className={classes.backdrop} open={usersIsLoading || productsIsLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export { Spinner };
