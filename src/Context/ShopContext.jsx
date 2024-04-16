import React, { createContext, useState } from "react";
import ProductsData from '../Assets/Data/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishListItems, setWishlistItems] = useState([]);

    const addToCart = (itemId) => {
        const cartItem = ProductsData.find((e) => e.id === Number(itemId));
        setCartItems([...cartItems, cartItem]);
    }

    const addToWishlist = (itemId) => {
        const wishlistItem = ProductsData.find((e) => e.id === Number(itemId));
        setWishlistItems([...wishListItems, wishlistItem]);
        
    }

    

    // useEffect(() => {
    //     // Load data from local storage when the component mounts
    //     const savedCartData = localStorage.getItem('cartItems');
    //     if (savedCartData) {
    //         setCartItems(savedCartData);
    //     }
    //   }, []);
    
    const productsData = {ProductsData, cartItems, wishListItems, addToCart, addToWishlist};

    return (
        <ShopContext.Provider value={productsData}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;