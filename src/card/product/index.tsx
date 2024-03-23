import React from 'react';
import './index.css';

interface Product {
    imgLink: string;
    Name: string;
    Price: number;
    Discount: number;
}

interface ProductCardProps {
    products: Product[];
}

function ProductCard({ products }: ProductCardProps): JSX.Element {
    return (
        <div>
            {products.map((product, index) => (
                <div className="product" key={index}>
                    <div className="product_top_overlay">
                        <p className="product_top_discount">
                            {product.Discount}%
                        </p>
                        <div className="product_top_icons">
                            <button>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            <button><i className="fa-regular fa-eye"></i></button>
                        </div>
                    </div>
                    <img src={product.imgLink} alt="" />
                    <div className="add_to_cart_btn">
                        <a href="#">Add To Cart</a>
                    </div>
                    <div className="product_description">
                        <p className="name">{product.Name}</p>
                        <p className="price">${product.Price}</p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
