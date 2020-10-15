import { createStore } from 'redux';
import rootReducer from './reduсers';

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {}

export default () => {
    return createStore(rootReducer, persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};