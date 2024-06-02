import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import ProductModel from '../../../../model/product';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/cartAction";

interface ProductProps {
    products: ProductModel[];
}

const Product: React.FC<ProductProps> = ({ products }) => {

    const dispatch = useDispatch();

    
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
                                </div>
                            </div>
                            <button onClick={()=>{dispatch(addToCart(product));
                                
                            }} className="buy-btn">
                                Add To Cart
                            </button>
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
