import React from "react";
import '../ProductDetails/ProductDetails.css';
import all_product from '../../Assets/Data/all_product';
import ProductTile from '../../Components/ProductTile/ProductTile'

function ProductDetails (props) {
    const product = props.product;
    const filteredProducts = all_product.filter((element) => {return element.category === product.category})

    return (
        <>
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
                        <div className="description-category-container">
                            <p className="product-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum impedit maxime porro reprehenderit repellendus recusandae neque autem iste temporibus sint ea omnis at sapiente, quos consequuntur eveniet mollitia totam eos.</p>
                            <p className="product-category">Category: <span>{product.category}</span></p>
                            <p className="product-tags">Tags: <span>Modern, New Collection</span></p>
                        </div>
                        <div className="variation-pdp-buttons-container">
                            <p className="variation-heading">Size:</p>
                            <div className="variation-container">
                                <div className="variation variation-active">S</div>
                                <div className="variation">M</div>
                                <div className="variation">L</div>
                                <div className="variation">XL</div>
                                <div className="variation">XXL</div>
                            </div>
                            <div className="pdp-btn-container">
                                <button className="addtowishlist">MOVE TO WISHLIST <i class="bi bi-heart-fill"></i></button>
                                <button className="addtocart">ADD TO CART <i class="bi bi-cart3"></i></button>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="pdp-similar-products">
                <p className="heading">EXPLORE SIMILAR</p>
                <div className="similar-products-grid">
                {
                    filteredProducts.slice(0,4).map((similarproduct) => {
                        return <ProductTile product={similarproduct}/>
                    })
                }
                </div>
            </div>
        </>
    )
}

export default ProductDetails;