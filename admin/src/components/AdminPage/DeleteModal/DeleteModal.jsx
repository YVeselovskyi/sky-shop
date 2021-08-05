import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../Users/store/usersSlice';
import { getProducts } from '../../Products/store/productsSlice';

const DeleteModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const { onDelete } = props;
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleDelete() {
    await dispatch(onDelete(props.item.id));
    // eslint-disable-next-line no-prototype-builtins
    if (props.item.hasOwnProperty('email')) await dispatch(getUsers());
    // eslint-disable-next-line no-prototype-builtins
    else if (props.item.hasOwnProperty('description')) await dispatch(getProducts());
    handleClose();
  }

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete this item? It will be deleted permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" variant="contained" startIcon={<DeleteIcon />} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { DeleteModal };
