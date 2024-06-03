import React, { useState } from "react";
import './index.css';
import ProductTitleCard from "../Productstitle";
import Product from "../product";
import CategoryButtonCard from "../categoryCard";
import ProductModel from "../../../../model/product";
import { Link } from "react-router-dom";

interface ProductSliderProps{
    title : string
    slog : string
    products : ProductModel[]
}


function ProductSlider({title,slog,products}:ProductSliderProps){
    
    const [startIndex, setStartIndex] = useState(0);
    const lastIndex = products.length - 1;

    const handleSlideLeft = () => {
        setStartIndex(prevIndex => prevIndex === 0 ? lastIndex : prevIndex - 1);        
    };

    const handleSlideRight = () => {
        setStartIndex(prevIndex => prevIndex === lastIndex ? 0 : prevIndex + 1);
    };

    return(
        <div className="product-slider">
            
            <ProductTitleCard
            title={title}
            slog={slog}
            />
            <div className="slider-clicks">
                <button className="button-left" onClick={handleSlideLeft}><i className="fa fa-angle-left slider-click-icon"></i></button>
                {slog === "category" ? (
                        <CategoryButtonCard
                            products={[...products.slice(startIndex), ...products.slice(0, startIndex)]}
                        />
                    ) : (
                        <Product
                            products={[...products.slice(startIndex), ...products.slice(0, startIndex)]}
                        />
                    )}
            <button className="button-right" onClick={handleSlideRight}><i className="fa fa-angle-right slider-click-icon"></i></button>
            </div>
            
            <div className="show-all">
                <Link to={'/category'}>View All Products</Link>
            </div>
            <hr />
        </div>
    )
}

export default ProductSlider;
