import React from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import TopPath from "../../commen/topPath";

function ProductDetail() {
    return(
        <>
        <NavBar />
        <div className="product-detail-page">
            <div className="product-detail-top-path">
                <p>Account / Fruit / <span>Grape</span></p>
            </div>
            <div className="product-detail-item">
                <div className="product-detail-item-left">
                    <div className="product-detail-item-left-images-choose">
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                    </div>
                    <div className="product-detail-item-image-main">
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" />
                    </div>
                </div>
                <div className="product-detail-item-right">
                    <h2>Grape</h2>
                    <div className="product-detail-rating">
                        <div className="product-detail-rating-icons">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        <p>150 reviews <hr /></p>
                        
                        <span>In Stock</span>
                    </div>
                    <p className="product-detail-price">$192.00</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit labore illum odit facilis, minus omnis ad aspernatur tempora voluptas saepe, at fugit debitis assumenda illo, corporis consequatur incidunt? Adipisci?</p>
                    <hr />
                    <div className="product-detail-colors">
                        <p>Colors : </p>
                        <div className="color-a"></div>
                        <div className="color-b"></div>
                        <div className="color-c"></div>
                    </div>
                    <div className="product-detail-buttons">
                        <div className="product-detail-button-quantity">
                            <i className="fa fa-minus"></i>
                            <p>2</p>
                            <i className="fa fa-plus"></i>
                        </div>
                        <button>Buy Now</button>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                    <div className="product-detail-services"></div>
                </div>
            </div>
            <div className="product-detail-related"></div>
        </div>
        </>
    )
}

export default ProductDetail;