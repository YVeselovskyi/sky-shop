/* eslint-disable react/jsx-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Drawer,
   Toolbar,
   List,
   ListItem,
   ListItemText,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const drawerWidth = 180;
const categoryClothes = ['Clothing', 'Shoes', 'Accessories', 'Sportwear'];
const useStyles = makeStyles((theme) => ({
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },
   drawerPaper: {
      width: drawerWidth,
   },
   drawerContainer: {
      overflow: 'auto',
   },
   asideMobile: {
      display: 'block',
      width: '180px',
      [theme.breakpoints.down('xs')]: {
         display: 'none',
      },
   },
}));

function AsideDesktop() {
   const classes = useStyles();
   return (
      <Drawer
         className={(classes.drawer, classes.asideMobile)}
         variant='permanent'
         classes={{
            paper: classes.drawerPaper,
         }}
      >
         <Toolbar />
         <div className={classes.drawerContainer}>
            <List>
               {categoryClothes.map((text, index) => (
                  <NavLink
                     to={`/${text.toLocaleLowerCase()}`}
                     className={classes.NavLink}
                     key={index.toString()}
                  >
                     <ListItem button>
                        <ListItemText primary={text} />
                     </ListItem>
                  </NavLink>
               ))}
            </List>
         </div>
      </Drawer>
   );
}
export default AsideDesktop;
