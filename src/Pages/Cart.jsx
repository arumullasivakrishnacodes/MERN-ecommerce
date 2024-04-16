import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import CartProductCard from "../Components/CartProductCard/CartProductCard";
import CartProductDetails from "../Components/CartItemDetails/CartItemDetails";
import ShopBagImage from '../Assets/Images/shop-bag-image.png';


function Cart () {
    const {cartItems, cartItemsCount} = useContext(ShopContext);

    if (cartItemsCount > 0) {
        return (
            <div className="cart-page-main-container row">
                <div className="cart-products-container col-7">
                    {
                        cartItems.map((product) => {
                            return <CartProductCard product={product} />
                        })
                    }
                </div>
                <div className="cart-price-coupon-container col-5">
                    <CartProductDetails />
                </div>
            </div>
        )
    } else {
        return (
            <div className="empty-cart-container">
                <img src={ShopBagImage} alt="" />
                <p className="empty-cart-heading">Hey, It feels so light!</p>
                <p>There is nothing in your bag. Let's add some items.</p>
                <button>ADD FROM WISHLIST</button>
            </div>
        )
    }
    
}

export default Cart;