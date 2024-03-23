import React from "react";
import './index.css';
import exp from "constants";
import ProductTitleCard from "../Productstitle";
import Product from "../product";
import CategoryButtonCard from "../categoryCard";

interface ProductSliderProps{
    title : string
    slog : string
    products : Product[]
}

function ProductSlider({title,slog,products}:ProductSliderProps){

    return(
        <div className="product-slider">
            <ProductTitleCard
            title={title}
            slog={slog}
            />
            {(()=>{
                if(slog == "category"){
                    return(
                        <CategoryButtonCard 
                        products={products}
                        />
                    )
                }
                else{
                    return(
                        <Product 
                    products={products}
                    />
                    )
                }
            })()}
            <div className="show-all">
                <button>View All Products</button>
            </div>
            <hr />
        </div>
    )
}



export default ProductSlider;
