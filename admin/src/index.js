import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import {
  addProduct, addUser, deleteUser, removeProduct, state,
} from './redux/state';

rerenderEntireTree(state, addUser, deleteUser, addProduct, removeProduct);

reportWebVitals();
