import React from "react";
import '../ProductDetails/ProductDetails.css';

function ProductDetails (props) {
    const product = props.product;

    return (
        <div className="productdetails-main-container row">
            <div className="col-2 mini-image-container">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="col-4 main-image-container"><img src={product.image} alt="" /></div>
            <div className="col-6 main-product-details-container">
                <div className="product-details-section">
                    <div className="name-price-container">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">$ {product.new_price} <span className="price-strike">$ {product.old_price}</span> <span className="price-discount">30% Off</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;