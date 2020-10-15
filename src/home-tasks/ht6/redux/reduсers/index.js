import shoppingReducer from './shopping';
import { combineReducers } from 'redux';

export default combineReducers({
    shopping: shoppingReducer,
})

