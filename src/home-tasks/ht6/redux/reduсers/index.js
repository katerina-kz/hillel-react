import cartReducer from './basket';
import productsReducer from './products'
import { combineReducers } from 'redux';

export default combineReducers({
    cart: cartReducer,
    products: productsReducer
})