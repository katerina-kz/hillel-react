import React from "react";

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

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
