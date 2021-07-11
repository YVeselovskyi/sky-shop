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

const AddUserModal = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [open, setOpen] = React.useState(false);
  const [genderValue, setGenderValue] = React.useState();
  const emailRef = React.useRef('');
  const usernameRef = React.useRef('');
  const ageRef = React.useRef('');

  const handleRadioChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const user = {
      id: props.array[props.array.length - 1].id + 1,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      age: ageRef.current.value,
      gender: genderValue,
    };
    props.addUser(user);
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
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
            <RadioGroup aria-label="gender" name="gender" defaultValue="M" onChange={handleRadioChange}>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddUserModal };
