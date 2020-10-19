export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const addToBasket = (productId) => ({
    type: ADD_TO_BASKET,
    payload: productId
});

export const removeFromBasket = productId => ({
    type: REMOVE_FROM_BASKET,
    payload: productId
});
