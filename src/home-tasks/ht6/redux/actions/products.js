export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

// export const ADD_TO_PRODUCT_LIST = 'ADD_TO_PRODUCT_LIST';
//
// export const addToProductList = (product) => ({
//     type:ADD_TO_PRODUCT_LIST,
//     payload: product
// });

export const fetchProducts = () => async dispatch => {
    dispatch({ type: FETCH_PRODUCT_PENDING });
    try {
        const data = await fetch('https://fakestoreapi.com/products').then(res => res.json());
        dispatch({
            type: FETCH_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: FETCH_PRODUCT_ERROR,
            payload: e.message
        });
        throw e;
    }
};
