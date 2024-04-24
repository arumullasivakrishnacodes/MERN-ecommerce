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
                <div className="row">
                    <p className="product-name col-11">{product.name}</p>
                    <button className="col-1 cart-remove-product-btn d-flex justify-content-end align-items-start p-0 btn btn-primary" data-toggle="modal" data-target={`#removecartproduct${product.id}`}><i class="bi bi-x mb-auto"></i></button>
                    <div class="modal fade" id={`removecartproduct${product.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Remove From Cart</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i class="bi bi-x"></i>
                                </button>
                            </div>
                            <p className="confirm-msg">Are you sure you want to move this item from bag?</p>
                            <div class="modal-body">
                                <div className="details-container row mb-3">
                                    <div className="image-block col-3"><img src={product.image} alt="" /></div>
                                    <div className="name-price-block col-9">
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price">$ {product.new_price} <span className="price-strike">$ {product.old_price}</span> <span className="price-discount">30% Off</span></p>
                                    </div>
                                </div>
                                <div className="buttons-container justify-content-center">
                                    <button className="move-to-wishlist" data-dismiss="modal" aria-label="Close" onClick={() => hamdleAddToWishlist(product.id)}>MOVE TO WISHLIST</button>
                                    <button className="remove-from-cart" data-dismiss="modal" aria-label="Close" onClick={() => deleteProduct(product.id)}>REMOVE ITEM</button>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <div className="return-policy-container">
                                <img src={returnImage} alt="" /> <span>14 days return available.</span>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="product-price">$ {product.new_price} <span className="price-strike">$ {product.old_price}</span> <span className="price-discount">30% Off</span></p>
                <div className="variant-quantity-container">
                    <div className="variant">Size: <span>XL</span></div>
                    <div className="quantity">Qty: <span>1</span></div>
                </div>
                <div className="return-policy-container">
                    <img src={returnImage} alt="" /> <span>14 days return available.</span>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;