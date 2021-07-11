import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { GridAddIcon } from '@material-ui/data-grid';

const AddProduct = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const product = {
      id: props.array.length + 1,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
    };
    props.addProduct(product);
    handleClose();
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={handleClickOpen}
        startIcon={<GridAddIcon />}
      >
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new product</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            inputRef={nameRef}
            placeholder="Name"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="string"
            fullWidth
            inputRef={descriptionRef}
            placeholder="Description"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            inputRef={priceRef}
            placeholder="Price"
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="string"
            fullWidth
            inputRef={categoryRef}
            placeholder="Category"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddProduct };
