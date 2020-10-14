export const PRODUCT_INCREMENT = 'PRODUCT_INCREMENT';
export const PRODUCT_DECREMENT = 'PRODUCT_DECREMENT';


export const productIncrement = (productId) => ({
    type: PRODUCT_INCREMENT,
    payload: productId
});

export const productDecrement = (productId) => ({
    type: PRODUCT_DECREMENT,
    payload: productId
});
