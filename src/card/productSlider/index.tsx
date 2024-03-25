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
            <div className="slider-clicks">
                <button className="button-left"><i className="fa fa-angle-left slider-click-icon"></i></button>
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
            <button className="button-right"><i className="fa fa-angle-right slider-click-icon"></i></button>
            </div>
            
            <div className="show-all">
                <button>View All Products</button>
            </div>
            <hr />
        </div>
    )
}



export default ProductSlider;
