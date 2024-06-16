import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/cartAction";
import { ProductModel } from "../../../../model/product";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers/rootReducer";

interface ProductProps {
    products: ProductModel[];
}

const Product: React.FC<ProductProps> = ({ products }) => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state:RootState)=>state.login.isAuthenticated)

    
    return (
        <div className="slider-products">
            {products.map((product, index) => (
                <div className="box" key={index}>
                    <div className="slide-img">
                        <img src={product.image} alt="" />
                        <div className="overlay">
                            {isAuthenticated?(<div className="overlay-top-icons">
                                <p className="discount">{product.old_price}%</p>
                                <div className="overlay-icons">
                                    <a href="#"><i className="fa fa-heart"></i></a>
                                </div>
                            </div>):(<p className="discount">- {product.old_price}%</p>)}
                            {isAuthenticated?(<button onClick={()=>{dispatch(addToCart({product}));
                                
                            }} className="buy-btn">
                                Add To Cart
                            </button>):(null)}
                        </div>
                    </div>
                    <div className="detail-box">
                        <div className="type">
                            <Link to={'/product-detail'}>{product.title}</Link>
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
                        <div className="price">${product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
