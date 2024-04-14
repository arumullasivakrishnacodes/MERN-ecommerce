import React, { createContext } from "react";
import ProductsData from '../Assets/Data/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const productsData = {ProductsData};

    return (
        <ShopContext.Provider value={productsData}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;