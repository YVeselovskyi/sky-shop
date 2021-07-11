import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree, observe } from './redux/state';

rerenderEntireTree();
observe(rerenderEntireTree);
reportWebVitals();
