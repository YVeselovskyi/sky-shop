import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import {
  state, addUser, deleteUser, addProduct, removeProduct,
} from './redux/state';

rerenderEntireTree(state, addUser, deleteUser, addProduct, removeProduct);

reportWebVitals();
