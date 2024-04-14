import React, { useContext } from "react";
import ProductTile from "../Components/ProductTile/ProductTile";
import { ShopContext } from "../Context/ShopContext";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";

function PLP (props) {
    const products = useContext(ShopContext);
    console.log(products)

    return (
        <div className="plp-main-container">
            <BreadCrumbs home='Home' category={props.category}  />
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
            
        </div>
    )
}

export default PLP;