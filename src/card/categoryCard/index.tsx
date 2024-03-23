import React from "react";
import './index.css';

interface Product{
    categoryName : string
    img : string
}

interface CategoryButtonCardProps{
    products : Product[]
}

function CategoryButtonCard({products}:CategoryButtonCardProps) {
    return(
        <div className="slider-products">
            {
                products.map((product, index)=>(
                    <a href="#" className="category-button-container-link">
            <img src={product.img} alt="" />
            <p>{product.categoryName}</p>
        </a>
                ))
            }
        </div>
            
        
    )
}

export default CategoryButtonCard;