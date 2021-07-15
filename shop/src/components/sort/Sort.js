import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   Grid,
   Paper,
   InputBase,
   IconButton,
   Button,
   Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StyledBadge from '@material-ui/core/Badge';
import ModalFormForBusket from '../modal/ModalForBusket/ModalForBusket';

const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   search: {
      width: '100%',
      height: '100%',
      display: 'flex',
      padding: '2px 15px',
      [theme.breakpoints.down('xs')]: {
         width: '100%',
         marginRight: '10px',
      },
   },
   searchPlaceholder: {
      width: '100%',
   },
   sortBy: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
         width: '100%',
         marginLeft: 0,
      },
   },
   bag: {
      width: '100%',
      height: 57,
   },
   cartPrice: {
      flexGrow: 1,
   },
}));

function sort({
   setSort,
   sortBy,
   searchQuery,
   setSearchQuery,
   totalPrice,
   count,
}) {
   const classes = useStyles();
   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <>
         <Grid item xs={12} sm={12} md={4}>
            <Paper component='form' className={classes.search} elevation={3}>
               <InputBase
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  placeholder='Search'
                  className={classes.searchPlaceholder}
               />
               <IconButton
                  // type='submit'
                  aria-label='search'
               >
                  <SearchIcon />
               </IconButton>
            </Paper>
         </Grid>
         <Grid item xs={12} sm={6} md={4}>
            <Paper>
               <FormControl variant='outlined' className={classes.sortBy}>
                  <InputLabel id='demo-simple-select-outlined-label'>
                     SortBy
                  </InputLabel>
                  <Select
                     labelId='demo-simple-select-outlined-label'
                     id='demo-simple-select-outlined'
                     value=''
                     // onChange={handleChange}
                     label='SortBy'
                  >
                     <MenuItem
                        value={sortBy === 'all'}
                        onClick={setSort.bind(this, 'all')}
                     >
                        All
                     </MenuItem>
                     <MenuItem
                        value={sortBy === 'price hight to low'}
                        onClick={setSort.bind(this, 'price hight to low')}
                     >
                        Price hight to low
                     </MenuItem>
                     <MenuItem
                        value={sortBy === 'price low to hight'}
                        onClick={setSort.bind(this, 'price low to hight')}
                     >
                        Price low to hight
                     </MenuItem>
                     <MenuItem
                        value={sortBy === 'title'}
                        onClick={setSort.bind(this, 'title')}
                     >
                        Title
                     </MenuItem>
                  </Select>
               </FormControl>
            </Paper>
         </Grid>

         <Grid item xs={12} sm={6} md={4}>
            <ModalFormForBusket totalPrice={totalPrice} count={count} />
         </Grid>
      </>
   );
}

export default sort;
