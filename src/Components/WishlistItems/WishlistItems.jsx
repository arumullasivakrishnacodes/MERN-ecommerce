import React, { useContext } from "react";
import '../WishlistItems/WishlistItems.css';
import { ShopContext } from "../../Context/ShopContext";
import ProductTile from "../ProductTile/ProductTile";

function WishlistItems () {
    const {wishListItems, removeWishlistItem, addToCart} = useContext(ShopContext);

    async function removeFromWishlist (productID) {
        removeWishlistItem(productID)
    }

    async function handleMoveToCart  (productID)  {
        addToCart(productID);
    }

    async function runFunctions (productID) {
        await removeFromWishlist(productID);
        await handleMoveToCart(productID);
    }

    return (
        <>
            <div className="wishlist-heading-container">
                <div className="heading">WISHLIST</div>
                <div className="heading-line"></div>
            </div>
            <div className="wishlist-items-main-container">
            {
                wishListItems.map((item, index) => {
                    return (
                        <div className="wishlist-each-item-container" key={index} >
                            <ProductTile product={item} />
                            <div className="wishlist-buttons-container">
                                <button className="remove-from-wishlist" id={item.id} onClick={() => {removeFromWishlist(item.id)}}>Remove</button>
                                <button className="move-to-cart-btn" id={item.id} onClick={() => {runFunctions(item.id)}}>MOVE TO CART</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
        
    )
}

export default WishlistItems;