import axios from 'axios';
import {
    CART_ADD_ITEM_FAIL,
    CART_ADD_ITEM_SUCCESS,
    CART_REMOVE_ITEM,
    CART_ADD_ITEM_REQUEST,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: CART_ADD_ITEM_REQUEST });
            const { data } = await axios.get(`/api/products/${ id }`);
            dispatch({
                type: CART_ADD_ITEM_SUCCESS,
                payload: {
                    product: data._id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    countInStock: data.countInStock,
                    qty,
                },
            });
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
        } catch (error) {
            dispatch({
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.message,
                type: CART_ADD_ITEM_FAIL,
            });
        }
    };
};