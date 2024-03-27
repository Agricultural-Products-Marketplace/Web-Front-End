import React from "react";
import './index.css'
import { Link } from "react-router-dom";

interface Product {
    discount: number;
    productName: string;
    productPrice: number;
    rating: number;
    img: string;
    categoryName : string
}

interface ProductProps {
    products: Product[];
}

function Product({ products }: ProductProps) {
    return (
        <div className="slider-products">
            {products.map((product, index) => (
                <div className="box" key={index}>
                    <div className="slide-img">
                        <img src={product.img} alt="" />
                        <div className="overlay">
                            <div className="overlay-top-icons">
                                <p className="discount">{product.discount}%</p>
                                <div className="overlay-icons">
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                    <a href="#"><i className="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <a href="#" className="buy-btn">
                                Buy Now
                            </a>
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="type">
                            <Link to={'/product-detail'}>{product.productName}</Link>
                            <span>New Arrival</span>
                            <div className="rating">
                                {[...Array(product.rating)].map((_, i) => (
                                    <i key={i} className="fa fa-star"></i>
                                ))}
                                {[...Array(5 - product.rating)].map((_, i) => (
                                    <i key={i + product.rating} className="fa-regular fa-star"></i>
                                ))}
                            </div>
                        </div>
                        <div className="price">${product.productPrice}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
