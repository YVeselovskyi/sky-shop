import React from 'react';
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
  const [value, setValue] = React.useState(USER.gender);

  const handleChange = (event) => {
    USER.gender = event.target.value;
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            fullWidth
            defaultValue={USER.email}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="string"
            fullWidth
            defaultValue={USER.username}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            defaultValue={USER.age}
            variant="outlined"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={USER.gender} onChange={handleChange}>
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" startIcon={<SaveIcon />}>
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            id="name"
            label="Name"
            type="name"
            fullWidth
            defaultValue={PRODUCT.name}
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
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { EditModalUser, EditModalProduct };
