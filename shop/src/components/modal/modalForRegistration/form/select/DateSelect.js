import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
   container: {
      display: 'flex',
      flexWrap: 'wrap',
   },
   textField: {
      marginRight: theme.spacing(1),
      width: 190,
   },
}));

export default function DateSelect() {
   const classes = useStyles();

   return (
      <TextField
         id='date'
         variant='outlined'
         label='Date of birth'
         type='date'
         defaultValue='2017-05-24'
         className={classes.textField}
         InputLabelProps={{
            shrink: true,
         }}
      />
   );
}
