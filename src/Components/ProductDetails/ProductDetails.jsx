import React, { useContext } from "react";
import '../ProductDetails/ProductDetails.css';
import all_product from '../../Assets/Data/all_product';
import ProductTile from '../../Components/ProductTile/ProductTile'
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

function ProductDetails (props) {
    const product = props.product;
    const filteredProducts = all_product.filter((element) => {return element.category === product.category})
    const {addToCart} = useContext(ShopContext);

    const handleaddToCart = (productId) => {
        addToCart(productId);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    }


    return (
        <>
            <BreadCrumbs home='Home' category={product.category} pname={product.name}/>
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
                                <button className="addtocart" onClick={() => {handleaddToCart(product.id)}}>ADD TO CART <i class="bi bi-cart3"></i></button>
                                <Link to='/cart'><button className="addtocart d-none" >GO TO CART <i class="bi bi-cart3"></i></button></Link>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="pdp-similar-products">
                <p className="heading">EXPLORE SIMILAR</p>
                <div className="similar-products-grid">
                {
                    filteredProducts.slice(0,4).map((similarproduct, index) => {
                        return <ProductTile key={index} product={similarproduct}/>
                    })
                }
                </div>
            </div>
            <div className="pdp-similar-products pdp-trending-products">
                <p className="heading">EXPLORE TRENDING</p>
                <div className="similar-products-grid">
                {
                    filteredProducts.slice(4,8).map((similarproduct, index) => {
                        return <ProductTile key={index} product={similarproduct}/>
                    })
                }
                </div>
            </div>
        </>
    )
}

export default ProductDetails;