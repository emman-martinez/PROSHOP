import axios from 'axios';
import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => {
    return async(dispatch) => {
        try {
            dispatch({
                type: PRODUCT_LIST_REQUEST,
            });
            const { data } = await axios.get('/api/products');
            dispatch({
                payload: data,
                type: PRODUCT_LIST_SUCCESS,
            });
        } catch (error) {
            dispatch({
                payload: error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
                type: PRODUCT_LIST_FAIL,
            });
        }
    };
};

export const listProductDetails = (id) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: PRODUCT_DETAILS_REQUEST,
            });
            const { data } = await axios.get(`/api/products/${ id }`);
            dispatch({
                payload: data,
                type: PRODUCT_DETAILS_SUCCESS,
            });
        } catch (error) {
            dispatch({
                payload: error.response && error.response.data.message ?
                    error.response.data.message :
                    error.message,
                type: PRODUCT_DETAILS_FAIL,
            });
        }
    };
};