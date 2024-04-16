import React, { createContext, useCallback, useEffect, useState } from "react";
import ProductsData from '../Assets/Data/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const [wishListItems, setWishlistItems] = useState([]);

    const addToCart = (itemId) => {
        const cartItem = ProductsData.find((e) => e.id === Number(itemId));
        setCartItems([...cartItems, cartItem]);
        setCartItemsCount(cartItems.length);
    }

    const removeCartItem = (itemId) => {
        const updatedProducts = cartItems.filter((product) =>{ return product.id !== itemId});
        setCartItems(updatedProducts);
    }

    const addToWishlist = (itemId) => {
        const wishlistItem = ProductsData.find((e) => e.id === Number(itemId));
        setWishlistItems([...wishListItems, wishlistItem]);
    }

    const getCartTotalPrice = useCallback(() => {
        let totalPrice = 0;
        cartItems.map((eachItem) => {
            return  totalPrice += Number(eachItem.new_price)
        })
        setCartTotalPrice(totalPrice);
    }, [cartItems]);

    
    useEffect(() => {
        const cartItemsLength = cartItems.length;
        setCartItemsCount(cartItemsLength);
        getCartTotalPrice();
    }, [cartItems, getCartTotalPrice]);
    
    const productsData = {ProductsData, cartItems, wishListItems, cartItemsCount, cartTotalPrice, addToCart, addToWishlist, removeCartItem};

    return (
        <ShopContext.Provider value={productsData}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;