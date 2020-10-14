import React from "react";

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const PRODUCT_INCREMENT = 'PRODUCT_INCREMENT';
export const PRODUCT_DECREMENT = 'PRODUCT_DECREMENT';
// export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addToBasket = (title, image, meta, description, amount) => ({
    type: ADD_TO_BASKET,
    payload: {
        title,
        image,
        meta,
        description,
        amount
    }
});

export const removeFromBasket = productId => ({
    type: REMOVE_FROM_BASKET,
    payload: productId
});

// export const productIncrement = (productId) => ({
//     type: PRODUCT_INCREMENT,
//     payload: productId,
// });
//
// export const productDecrement = (productId) => ({
//     type: PRODUCT_DECREMENT,
//     payload: productId,
// });


// export const toggleTodo = (todoId, completed) => ({
//     type: TOGGLE_TODO,
//     payload: {
//         todoId,
//         completed
//     }
// });