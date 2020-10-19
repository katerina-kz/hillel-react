import { createStore, applyMiddleware, compose } from 'redux';
import { cartLocalStorage } from './middlewares/cartLocalStorage';
import rootReducer from './reduсers';
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(cartLocalStorage, thunk),
);

export default () => {
    return createStore(
        rootReducer, enhancer
    );
};
