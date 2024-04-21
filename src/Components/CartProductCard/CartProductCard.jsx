import React, { useContext } from "react";
import '../CartProductCard/CartProductCard.css';
import returnImage from '../../Assets/Images/returnimage.png';
import { ShopContext } from "../../Context/ShopContext";

function CartProductCard (props) {
    const product = props.product;
    const {removeCartItem, addToWishlist} = useContext(ShopContext)

    const deleteProduct = (productID) => {
        removeCartItem(productID);
    }

    async function hamdleAddToWishlist  (productID)  {
        await addToWishlist(productID);
        await deleteProduct(productID);
    }

    return (
        <div className="cart-product-card-container row">
            <div className="cart-image-container col-3">
                <img src={product.image} alt="" />
            </div>
            <div className="cart-product-details-section col-9">
                <p className="product-name">{product.name}</p>
                <p className="product-price">$ {product.new_price} <span className="price-strike">$ {product.old_price}</span> <span className="price-discount">30% Off</span></p>
                <div className="variant-quantity-container">
                    <div className="variant">Size: <span>XL</span></div>
                    <div className="quantity">Qty: <span>1</span></div>
                </div>
                <div className="return-policy-container">
                    <img src={returnImage} alt="" /> <span>14 days return available.</span>
                </div>
                <div className="buttons-container">
                    <button className="move-to-wishlist" onClick={() => hamdleAddToWishlist(product.id)}>MOVE TO WISHLIST</button>
                    <button className="remove-from-cart" onClick={() => deleteProduct(product.id)}>REMOVE ITEM</button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;