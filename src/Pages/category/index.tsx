import { useState, useEffect } from 'react';
import CategoryCard from '../shared/card/category';
import './index.css';
import ProductModel from '../../model/product';

function Category() {
    

    // Local list variable
    const products: ProductModel[] = [
        
        
        {
            id: 4,
            productName: 'PineApple',
            img: 'https://static.libertyprim.com/files/familles/ananas-large.jpg?1569271716',
            categoryName: 'Category',
            productPrice: 110,
            discount: 5,
            rating: 4
        },
    ];


    return(
        <div className="category-page">
            <CategoryCard />
            <div className="category-page-items">
                {/* Map through the fetched products and render each one */}
                {products.map((product, index) => (
                    <a key={index} href={`/product-detail?${product.id}`} className="category-page-item">
                        <div className='category-page-item-overlay'>
                            <div className="overlay-top">
                                <p>{product.discount}%</p>
                                <div className="category-page-items-icon">
                                    <button onClick={()=>{}}><i className="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                            <div className="overly-bottom">
                                <button>Add To Cart</button>
                            </div>
                        </div>
                        <img src={product.img} alt={product.productName} />
                        <div className="category-item-description">
                            <div className="category-page-item-dis">
                                <small>{product.categoryName}</small>
                                <h3>{product.productName}</h3>
                                <div className="rating">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i key={i} className="fa fa-star"></i>
                                    ))}
                                    {[...Array(5 - product.rating)].map((_, i) => (
                                        <i key={i + product.rating} className="fa-regular fa-star"></i>
                                    ))}
                                </div>
                            </div>
                            <div className="category-dis-bottom">
                                <p>${product.productPrice}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Category;
