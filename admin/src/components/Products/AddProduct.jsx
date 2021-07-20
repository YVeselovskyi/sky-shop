import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { GridAddIcon } from '@material-ui/data-grid';
import { useDispatch } from 'react-redux';
import { addProduct, getProducts } from './store/productsSlice';

const AddProduct = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const imgUrlRef = useRef();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleAdd() {
    const product = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: +priceRef.current.value,
      category: categoryRef.current.value,
      imgUrl: imgUrlRef.current.value,
    };
    // console.log(JSON.stringify(product));
    await dispatch(addProduct(product));
    await dispatch(getProducts());
    handleClose();
  }

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
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="imgUrl"
            label="ImageURL"
            type="string"
            fullWidth
            inputRef={imgUrlRef}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AddProduct };
