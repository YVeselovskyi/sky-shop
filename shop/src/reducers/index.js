import { combineReducers } from "redux";

import clothes from './clothes';
import cart from './cart';

export default combineReducers({
    clothes,
    cart
});