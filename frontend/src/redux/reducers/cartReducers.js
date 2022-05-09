import {
    CART_ADD_ITEM_FAIL,
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_REMOVE_ITEM,
} from '../constants/cartConstants';

const initialState = {
    cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
    console.log({ state });
    console.log({ action });
    switch (action.type) {
        case CART_ADD_ITEM_REQUEST:
            return {
                cartItems: [],
                loading: true,
            }
        case CART_ADD_ITEM_SUCCESS:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);

            if (existItem) {
                console.log('1');
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x),
                    loading: false,
                };
            } else {
                console.log('2');
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                    loading: false,
                };
            }
        case CART_ADD_ITEM_FAIL:
            return {
                error: action.payload,
                loading: false,
            };
        case CART_REMOVE_ITEM:
            return {

            };
        default:
            return state;
    }
};