import React from "react";
import './index.css'

interface ProductProps {
    discount: number;
    productName: string;
    productPrice: number;
    rating: number;
    img: string;
}

function Product({ discount, productName, productPrice, rating,img }: ProductProps) {
    return(
        <div className="box">
        <div className="slide-img">
            <img src={img} alt="" />
            <div className="overlay">
                <div className="overlay-top-icons">
                    <p className="discount">{discount}%</p>
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
                <a href="#">{productName}</a>
                <span>New Arrival</span>
                <div className="rating">
                    {(() =>{
                        if(rating == 1){
                            return(
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            )
                        }
                        else if(rating == 2){
                            return(
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            )
                        }
                        else if(rating == 3){
                            return(
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            )
                        }
                        else if(rating == 4){
                            return(
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            )
                        }
                        else if(rating == 5){
                            return(
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            )
                        }
                        
                    })()}
                </div>
            </div>
            <div className="price">${productPrice}</div>
        </div>
        </div>
    );
}

export default Product;