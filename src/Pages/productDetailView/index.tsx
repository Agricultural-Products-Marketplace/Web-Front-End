import React, { useState } from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import TopPath from "../../commen/topPath";
import Product from "../../card/product";
import ProductSlider from "../../card/productSlider";

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const [mainImage, setMainImage] = useState("https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg");
    return(
        <>
        <div className="product-detail-page">
            <TopPath
            prepath="Account / Fruit/ " 
            mainpath="Grape"
            />
            <div className="product-detail-item">
                <div className="product-detail-item-left row">
                    <div className="product-detail-item-left-images-choose col">
                    <img src="https://www.tastingtable.com/img/gallery/are-oranges-named-after-the-color/l-intro-1666984048.jpg" alt="" onClick={() => setMainImage("https://www.tastingtable.com/img/gallery/are-oranges-named-after-the-color/l-intro-1666984048.jpg")} />
                        <img src="https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg" alt="" onClick={() => setMainImage("https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg")} />
                        <img src="https://images.unsplash.com/photo-1509391618207-32f1fa13c1d2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D" alt="" onClick={() => setMainImage("https://images.unsplash.com/photo-1509391618207-32f1fa13c1d2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D")}/>
                    </div>
                    <div className="product-detail-item-image-main">
                    <img src={mainImage} alt="" />
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
                    <div className="product-detail-colors row">
                        <p>Colors : </p>
                        <div className="color-a"></div>
                        <div className="color-b"></div>
                        <div className="color-c"></div>
                    </div>
                    <div className="product-detail-buttons row">
                        <div className="product-detail-button-quantity row">
                            <button onClick={decrementQuantity}><i className="fa fa-minus"></i></button>
                            <p>{quantity}</p>
                            <button onClick={incrementQuantity}><i className="fa fa-plus"></i></button>
                        </div>
                        <button className="buy-now-btn">Buy Now</button>
                        <button><i className="fa-regular fa-heart"></i></button>
                    </div>
                    <div className="product-detail-services col">
                        <div className="product-detail-service-item">
                            <i className="fa fa-truck"></i>
                            <div className="col">
                                <span>Free Delivery</span>
                                <small>Enter Your Postal Code for Delivery Avialable</small>
                            </div>
                        </div>
                        <div className="product-detail-service-item">
                            <i className="fa fa-truck"></i>
                            <div className="col">
                                <span>Free Delivery</span>
                                <small>Enter Your Postal Code for Delivery Avialable</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductSlider 
                    products={[
                        {
                            productName:'apple',
                            productPrice : 16,
                            categoryName : '',
                            rating:3,
                            discount: 40,
                            img:'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=hsBPt3DQ'
                        },
                        {
                            productName:'apple',
                            productPrice : 16,
                            categoryName : '',
                            rating:3,
                            discount: 40,
                            img:'https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg'
                        }
                    ]}
                    title=""
                    slog="Related Items"
                    />
        </div>
        </>
    )
}

export default ProductDetail;