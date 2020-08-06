import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import store from "../store";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import API from '../utils/api'
export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});


export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    // shop.getProducts(products => {
    //     dispatch(receiveProducts(products));
    //     return products;
    // })
    API.get('/products').then((res) => {
        dispatch(receiveProducts(res.data));
    }).catch(err => console.log('ERR', err))
}
export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})




//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product, qty, user) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty, user))

}
export const addToCartAndRemoveWishlist = (product, qty, user) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty, user));
    dispatch(removeFromWishlist(product));
}
export const addToCartUnsafe = (product, qty, user) => ({
    type: types.ADD_TO_CART,
    product,
    qty,
    user
});
export const removeFromCart = (product, user) => (dispatch) => {
    toast.error("Item Removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        product,
        user
    })
};
export const incrementQty = (product, qty, user) => (dispatch) => {
    toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty, user))

}
export const decrementQty = (productId, user) => (dispatch) => {
    toast.warn("Item Decrement Qty to Cart");

    dispatch({
        type: types.DECREMENT_QTY,
        productId,
        user
    })
};

// Empty Cart
export const emptyCart = () => (dispatch) => {
    dispatch({
        type: types.EMPTY_CART
    })
};

//it seems that I should probably use this as the basis for "Wishlist"
// Modify function
export const addToWishlist = (product, user) => (dispatch) => {
    toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product, user))

}
// Modify function
export const addToWishlistUnsafe = (product, user) => ({
    type: types.ADD_TO_WISHLIST,
    product,
    user
});
export const removeFromWishlist = product_id => (dispatch) => {
    toast.error("Item Removed from Wishlist");
    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        product_id
    })
};

// Filters
export const filterBrand = (brand) => ({
    type: types.FILTER_BRAND,
    brand
});
export const filterColor = (color) => ({
    type: types.FILTER_COLOR,
    color
});
export const filterPrice = (value) => ({
    type: types.FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});


// Currency
export const changeCurrency = (symbol) => ({
    type: types.CHANGE_CURRENCY,
    symbol
});

