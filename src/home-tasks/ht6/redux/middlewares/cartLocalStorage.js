import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actions/basket'

export const cartLocalStorage = store => next => action => {
    console.log(action.type)
    if ([ADD_TO_BASKET, REMOVE_FROM_BASKET].includes(action.type)) {
        next(action);
        const nextState = store.getState();

        try {
            localStorage.setItem('products', JSON.stringify(nextState.cart));
        } catch (e) {
            console.log('ERROR SAVING STATE')
        }
        return;
    }
    return next(action);
};