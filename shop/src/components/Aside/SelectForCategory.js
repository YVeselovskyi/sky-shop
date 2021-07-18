import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   button: {
      display: 'block',
      marginTop: theme.spacing(2),
      textAlign: 'center',
      width: '100%',
      fontSize: 50,
   },
   formControl: {
      margin: theme.spacing(1),
      width: '100%',
   },
   selectMobile: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
         display: 'block',
         marginRight: '2%',
         marginLeft: '-2%',
      },
   },
   link: {
      width: '100%',
   },
}));
const categoryArr = ['Clothing', 'Shoes', 'Accessories', 'Sportwear'];

export default function SelectForCategory() {
   const classes = useStyles();
   const [age, setAge] = React.useState('');
   const [open, setOpen] = React.useState(false);

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };

   return (
      <div className={classes.selectMobile}>
         <Button className={classes.button} onClick={handleOpen}>
            Category
         </Button>
         <FormControl className={classes.formControl}>
            <FormControl variant='outlined'>
               <InputLabel id='FilterBy'>Categoty</InputLabel>
               <Select label='Filter by'>
                  <MenuItem value={1}>
                     <Link to={`/clothing`} className={classes.link}>
                        Clothing
                     </Link>
                  </MenuItem>
                  <MenuItem value={2}>
                     <Link to={`/shoes`} className={classes.link}>
                        Shoes
                     </Link>
                  </MenuItem>
                  <MenuItem value={3}>
                     <Link to={`/accessories`} className={classes.link}>
                        Accessories
                     </Link>
                  </MenuItem>
                  <MenuItem value={4}>
                     <Link to={`/sportwear`} className={classes.link}>
                        Sportwear
                     </Link>
                  </MenuItem>
               </Select>
            </FormControl>
         </FormControl>
      </div>
   );
}
