import counterReducer from './counter';
import shoppingReducer from './shopping';
import productCounterReducer from './productCounter'
import { combineReducers } from 'redux';

export default combineReducers({
    shopping: shoppingReducer,
    counter: counterReducer,
    productCounter: productCounterReducer
})

