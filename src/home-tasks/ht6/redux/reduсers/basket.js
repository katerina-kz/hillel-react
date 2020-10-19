import {ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/basket";

let initialState = [];

try {
  initialState = JSON.parse(localStorage.getItem('products' || '[]'))
} catch (e) {
  console.log('local storage is empty')
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const basketProduct = state.find(cartProduct => cartProduct.id === action.payload);
      // debugger
      if (!basketProduct) return [...state, { id: action.payload, count: 1 }];
      return state.map(cartProduct => cartProduct === basketProduct ? ({ ...basketProduct, count: basketProduct.count + 1 }) : cartProduct)
    }
    case REMOVE_FROM_BASKET: {
      const basketProduct = state.find(cartProduct => cartProduct.id === action.payload);
      if (basketProduct.count === 1) {
        return state.filter(cartProduct => cartProduct.id !== action.payload);
      }
      return state.map(cartProduct => cartProduct === basketProduct ? ({ ...basketProduct, count: basketProduct.count - 1 }) : cartProduct)
    }
    default: return state;
  }
};
