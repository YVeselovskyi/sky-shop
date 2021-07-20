import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {
  Dialog, DialogActions, DialogContent, DialogTitle,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { editProductById, getProducts } from '../../Products/store/productsSlice';

export const EditProductModal = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { product } = props;
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSave() {
    const editedProduct = {
      name,
      description,
      category,
      price,
      imgUrl,
    };
    // eslint-disable-next-line no-underscore-dangle
    await dispatch(editProductById({ _id: product._id, editedProduct }));
    await dispatch(getProducts());
    handleClose();
  }

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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="imgURL"
            label="ImageURL"
            type="string"
            fullWidth
            defaultValue={product.imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
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
