import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar, List, ListItem, ListItemText } from '@material-ui/core';


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
   }

 }));

function AsideDesktop () {
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
                     {categoryClothes.map(
                        (text) => (
                           <ListItem button key={text}>
                              <ListItemText primary={text} />
                           </ListItem>
                        )
                     )}
                  </List>
               </div>
            </Drawer>
    )
}
export default AsideDesktop;