import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@material-ui/core';
import { GridAddIcon } from '@material-ui/data-grid';
import { useDispatch } from 'react-redux';
import { addUser, getUsers } from '../store/usersSlice';

const AddUserModal = () => {
  // eslint-disable-next-line react/destructuring-assignment
  const [open, setOpen] = React.useState(false);
  const [genderValue, setGenderValue] = React.useState();
  const emailRef = React.useRef('');
  const usernameRef = React.useRef('');
  const ageRef = React.useRef('');
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleAdd() {
    const user = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      age: +ageRef.current.value,
      gender: genderValue,
    };
    console.log(JSON.stringify(user));
    await dispatch(addUser(user));
    await dispatch(getUsers());
    handleClose();
  }

  const handleOpen = () => {
    setOpen(true);
    // dispatch(getUsers());
  };

  return (
    <div>
      <Button color="primary" onClick={handleOpen} startIcon={<GridAddIcon />}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new user</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            required="true"
            fullWidth
            placeholder="email"
            inputRef={emailRef}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="string"
            required="true"
            fullWidth
            placeholder="username"
            inputRef={usernameRef}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="number"
            required="true"
            fullWidth
            placeholder="Age"
            inputRef={ageRef}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" onChange={handleRadioChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" variant="contained">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddUserModal };
