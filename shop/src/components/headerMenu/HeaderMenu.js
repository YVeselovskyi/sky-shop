import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalFormForLogin from '../modal/modalForLogIn/ModalFormForLogin';
import ModalFormForRegistration from '../modal/modalForRegistration/ModalFormForRegistration';
import {
   CssBaseline,
   AppBar,
   Box,
   Toolbar,
   Typography,
} from '@material-ui/core';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      display: 'flex',
   },
   title: {
      flexGrow: 1,
   },
   large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
   },
}));

function headerMenu() {
   const classes = useStyles();
   const [isLogined, setIsLogined] = useState(false);
   const handlerLogIn = () => {
      setIsLogined(true);
   };
   const handlerLogOut = () => {
      setIsLogined(false);
   };

   return (
      <>
         <CssBaseline />
         <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
               <Typography variant='h6' className={classes.title}>
                  SkyShop
               </Typography>
               {isLogined ? (
                  <>
                     <Box mr={2}>
                        <Avatar
                           className={classes.large}
                           alt='Travis Howard'
                           src='https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg'
                        />
                     </Box>
                     <Button
                        color='inherit'
                        variant='outlined'
                        onClick={handlerLogOut}
                     >
                        Log Out
                     </Button>
                  </>
               ) : (
                  <>
                     <Box mr={2}>
                        <ModalFormForLogin login={handlerLogIn} />
                     </Box>
                     <ModalFormForRegistration />
                  </>
               )}
            </Toolbar>
         </AppBar>
      </>
   );
}

export default headerMenu;
