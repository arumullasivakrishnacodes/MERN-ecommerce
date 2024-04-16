import React, { useContext } from "react";
import CouponImage from '../../Assets/Images/couponimage.png';
import '../CartItemDetails/CartItemDetails.css';
import { ShopContext } from "../../Context/ShopContext";

function CartProductDetails () {
    const {cartItemsCount, cartTotalPrice} = useContext(ShopContext);
    if (cartItemsCount > 0) {
        return (
            <div className="cart-price-details-section-container">
                <div className="coupons-container">
                    <div className="heading">COUPONS</div>
                    <div className="apply-coupon-section">
                        <div className="heading-section">
                            <img src={CouponImage} alt="" /> <span>APPLY COUPON</span>
                        </div>
                        <button className="apply-coupon-btn">APPLY</button>
                    </div>
                </div>
                <div className="product-details-section">
                    <div className="heading">ProductDetails ( <span>{cartItemsCount}</span> <span>{cartItemsCount > 1 ? 'Items' : 'Item'} )</span></div>
                    <div className="price-breakup-section">Total Price <span>$ {cartTotalPrice}</span></div>
                    <div className="price-breakup-section">Discount Price <span>$ 0</span></div>
                    <div className="price-breakup-section">Coupon Discount <span>$ 0</span></div>
                    <div className="price-breakup-section">Platform fee <span>$ 1</span></div>
                    <div className="price-breakup-section">Shipping fee <span>$ 3</span></div>
                </div>
                <div className="place-order-section">
                    <div className="total-price">Total Price <span>$ {cartTotalPrice + 4}</span></div>
                    <button className="place-order-btn">PLACE ORDER</button>
                </div>
            </div>
        )
    }
    
}

export default CartProductDetails;