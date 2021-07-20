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
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  async function handleAdd() {
    const user = {
      email,
      username,
      age: +age,
      gender,
    };
    await dispatch(addUser(user));
    await dispatch(getUsers());
    handleClose();
  }

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setAge(e.target.value)}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            color="primary"
            variant="contained"
          >
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddUserModal };
