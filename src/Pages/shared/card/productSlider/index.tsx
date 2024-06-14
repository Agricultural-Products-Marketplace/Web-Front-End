import React, { useState } from "react";
import './index.css';
import ProductTitleCard from "../Productstitle";
import Product from "../product";
import CategoryButtonCard from "../categoryCard";
import { Link } from "react-router-dom";
import { ProductModel } from "../../../../model/product";
import { Category } from "../../../../model/category";

interface ProductSliderProps{
    title : string;
    slog : string;
    products : ProductModel[] | [];
    category:Category[] | [];
}


function ProductSlider({title,slog,products,category}:ProductSliderProps){
    
    const [startIndex, setStartIndex] = useState(0);
    const lastIndex = products.length - 1;
    const lastIndexcategory = category.length - 1;

    const handleSlideLeft = (lastIndex:number) => {
        setStartIndex(prevIndex => prevIndex === 0 ? lastIndex : prevIndex - 1);        
    };

    const handleSlideRight = (lastIndex:number) => {
        setStartIndex(prevIndex => prevIndex === lastIndex ? 0 : prevIndex + 1);
    };

    return(
        <div className="product-slider">
            
            <ProductTitleCard
            title={title}
            slog={slog}
            />
            <div className="slider-clicks">
                <button className="button-left" onClick={()=>{
                    if(lastIndex > 0){
                        handleSlideLeft(lastIndex);
                    }
                    else if(lastIndexcategory > 0){
                        handleSlideLeft(lastIndexcategory)
                    }
                }}><i className="fa fa-angle-left slider-click-icon"></i></button>
                {slog === "category" ? (
                        <CategoryButtonCard
                        categories={[...category.slice(startIndex), ...category.slice(0, startIndex)]}
                        />
                    ) : (
                        <Product
                            products={[...products.slice(startIndex), ...products.slice(0, startIndex)]}
                        />
                    )}
            <button className="button-right" onClick={()=>{
                if(lastIndex > 0){
                    handleSlideRight(lastIndex);
                }
                else if(lastIndexcategory > 0){
                    handleSlideRight(lastIndexcategory)
                }
            }}><i className="fa fa-angle-right slider-click-icon"></i></button>
            </div>
            
            <div className="show-all">
                <Link to={'/category'}>View All Products</Link>
            </div>
            <hr />
        </div>
    )
}

export default ProductSlider;
