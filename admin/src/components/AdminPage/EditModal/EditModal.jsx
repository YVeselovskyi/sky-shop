import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { editUserById, getUsers } from '../../Users/store/usersSlice';
import { editProduct } from '../../Products/store/productsSlice';

const EditModalUser = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { user } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [genderValue, setGenderValue] = React.useState(user.gender);
  const emailRef = useRef();
  const usernameRef = useRef();
  const ageRef = useRef();

  const handleRadioChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSave() {
    const editedUser = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      age: +ageRef.current.value,
      gender: genderValue,
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
            defaultValue={user.username}
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
            defaultValue={user.age}
            inputRef={ageRef}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" defaultValue={genderValue} onChange={handleRadioChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const EditModalProduct = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { product } = props;
  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const editedProduct = {
      id: product.id,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
    };
    dispatch(editProduct(editedProduct));
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            defaultValue={product.name}
            inputRef={nameRef}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="string"
            fullWidth
            defaultValue={product.description}
            inputRef={descriptionRef}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            defaultValue={product.price}
            inputRef={priceRef}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="string"
            fullWidth
            defaultValue={product.category}
            inputRef={categoryRef}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { EditModalUser, EditModalProduct };
