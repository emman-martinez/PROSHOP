import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    productDetails: productDetailsReducer,
    productList: productListReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.stringify(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
    },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;