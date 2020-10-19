import { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR, fetchProducts } from "../actions/products";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            };
        default: return state;
    }
}