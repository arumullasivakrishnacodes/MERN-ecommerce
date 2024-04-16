import React, { useContext } from "react";
import ProductTile from "../Components/ProductTile/ProductTile";
import { ShopContext } from "../Context/ShopContext";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";

function PLP (props) {
    const products = useContext(ShopContext);

    return (
        <div className="plp-main-container">
            <BreadCrumbs home='Home' category={props.category}  />
            <div className="smart-filters-container">
                <button>Modern Wear</button>
                <button>Traditional Wear</button>
                <button>Eastern Wear</button>
                <button>Below 10K</button>
                <button>Above 10K</button>
            </div>
            <div className="plp-product-container">
                {
                    products.ProductsData.map((product, index) => {
                        if (props.category === product.category) {
                            return <ProductTile key={index} product={product} />;
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className="showmorebutton-container">
                <button>EXPLORE MORE</button>
            </div>
        </div>
    )
}

export default PLP;