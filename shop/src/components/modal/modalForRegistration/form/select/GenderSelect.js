import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   selectEmpty: {
      width: 190,
   },
}));

export default function GenderSelect() {
   const classes = useStyles();
   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <FormControl className={classes.formControl}>
         <Select
            labelId='demo-simple-select-placeholder-label-label'
            id='demo-simple-select-placeholder-label'
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            variant='outlined'
         >
            <MenuItem value=''>
               <em>Gender</em>
            </MenuItem>
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
         </Select>
      </FormControl>
   );
}
