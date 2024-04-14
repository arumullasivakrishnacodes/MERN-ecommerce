import React from "react";
import '../ProductTile/ProductTile.css';
import { NavLink } from "react-router-dom";

function ProductTile (props) {
    const product = props.product;

    return (
        <div className="productTile-main-container">
            <div className="product-details-container">
                <div className="tile-wishlist"><i class="bi bi-heart"></i></div>
                <NavLink to={`/product/${product.id}`}><img src={product.image} className="product-image" alt="product.name" /></NavLink>
                <p className="product-name">{product.name.length > 30 ? product.name.substring(0,26)+'...' : product.name}</p>
                <p className="product-price">$ {product.new_price} <span className="strike-price">$ {product.old_price}</span> <span className="discount-offer">30% Off</span></p>
            </div>
        </div>
    )
}

export default ProductTile;