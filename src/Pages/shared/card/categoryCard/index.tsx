import React from "react";
import './index.css';
import { ProductModel } from "../../../../model/product";
import { Category } from "../../../../model/category";


interface CategoryButtonCardProps{
    categories : Category[]
}

function CategoryButtonCard({categories}:CategoryButtonCardProps) {
    return(
        <div className="slider-products category-slider-item">
            {
                categories.map((category, index)=>(
                    <a href="#" className="category-button-container-link">
            <img src={category.image} alt="" />
            <p>{category.title}</p>
        </a>
                ))
            }
        </div>
            
        
    )
}

export default CategoryButtonCard;