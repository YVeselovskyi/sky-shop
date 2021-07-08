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

const EditModalUser = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const USER = props.user;
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [genderValue, setGenderValue] = React.useState(USER.gender);
  // eslint-disable-next-line no-undef,no-unused-vars
  const emailRef = useRef(USER.email);
  const usernameRef = useRef(USER.username);
  const ageRef = useRef(USER.age);
  const handleRadioChange = (event) => {
    setGenderValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    USER.email = emailRef.current.value;
    USER.username = usernameRef.current.value;
    USER.age = ageRef.current.value;
    USER.gender = genderValue;
    // eslint-disable-next-line no-restricted-globals
    handleClose();
  };

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
            defaultValue={USER.email}
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
            defaultValue={USER.username}
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
            defaultValue={USER.age}
            inputRef={ageRef}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" defaultValue={USER.gender} onChange={handleRadioChange}>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
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
  const PRODUCT = props.product;
  const nameRef = useRef(PRODUCT.name);
  const descriptionRef = useRef(PRODUCT.description);
  const categoryRef = useRef(PRODUCT.category);
  const priceRef = useRef(PRODUCT.price);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    PRODUCT.name = nameRef.current.value;
    PRODUCT.description = descriptionRef.current.value;
    PRODUCT.category = categoryRef.current.value;
    PRODUCT.price = priceRef.current.value;
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
            defaultValue={PRODUCT.name}
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
            defaultValue={PRODUCT.description}
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
            defaultValue={PRODUCT.price}
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
            defaultValue={PRODUCT.category}
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
