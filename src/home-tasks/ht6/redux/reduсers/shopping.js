import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/shopping";
import { PRODUCT_INCREMENT, PRODUCT_DECREMENT } from "../actions/productCounter";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            let addedItem = state.find(item => item.title === action.payload.title);
            if (addedItem) {
                return state.filter(item => item === addedItem ? addedItem.amount += 1 : state);
            } else {
                return [...state, {
                    id: Math.random() + '',
                    title: action.payload.title,
                    image: action.payload.image,
                    meta: action.payload.meta,
                    description: action.payload.description,
                    amount: action.payload.amount
                }]
            }
        case REMOVE_FROM_BASKET:
            return state.filter(productItem => productItem.id !== action.payload);
        case PRODUCT_INCREMENT:
            return state.filter(productItem => productItem.id === action.payload ? [...state, productItem.amount += 1] : state);
        case PRODUCT_DECREMENT:
            return state.filter(productItem => productItem.id === action.payload ? [...state, productItem.amount -= 1] : state);
        default:
            return state;
    }
};