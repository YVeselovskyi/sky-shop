import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalFormForLogin from '../modal/modalForLogIn/ModalFormForLogin';
import ModalFormForRegistration from '../modal/modalForRegistration/ModalFormForRegistration';
import { CssBaseline, AppBar, Box, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        display: 'flex',
     },
     title: {
         flexGrow: 1,
     },

 }));


function headerMenu () {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
               <Toolbar>
                  <Typography variant='h6' className={classes.title}>
                     SkyShop
                  </Typography>
                  <Box mr={2}>
                     <ModalFormForLogin />
                  </Box>
                  <ModalFormForRegistration />
               </Toolbar>
            </AppBar>
        </>
    )
}







export default headerMenu;