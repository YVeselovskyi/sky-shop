import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { editUserById, getUsers } from '../../Users/store/usersSlice';

export const EditUserModal = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { user } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(user.email);
  const [username, setUsername] = React.useState(user.username);
  const [age, setAge] = React.useState(user.age);
  const [gender, setGender] = React.useState(user.gender);

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSave() {
    const editedUser = {
      email,
      username,
      age: +age,
      gender,
    };
    // eslint-disable-next-line no-underscore-dangle,
    await dispatch(editUserById({ _id: user._id, editedUser }));
    await dispatch(getUsers());
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} startIcon={<EditIcon />}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            required="true"
            fullWidth
            defaultValue={user.email}
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
            defaultValue={user.username}
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
            defaultValue={user.age}
            onChange={(e) => setAge(e.target.value)}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              defaultValue={gender}
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
            onClick={handleSave}
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
