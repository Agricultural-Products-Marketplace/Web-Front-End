import React, { useState, useEffect } from "react";
import './index.css';
import NavBar from "../shared/commen/navBar";
import TopPath from "../shared/commen/topPath";
import { getProductById, ProductData } from '../../services/product/getProducts';
import ServicesCard from "../shared/commen/services";
import ProductSlider from "../shared/card/productSlider";

function ProductDetail() {
    const [product, setProduct] = useState<ProductData | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState<string | undefined>(undefined); // Initialize with undefined

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('id');
        
        if(productId) {
            fetchProduct(productId);
        }
    }, []);

    const fetchProduct = async (productId: string) => {
        try {
            const productData = await getProductById(Number(productId));
            setProduct(productData);
            // Set main image here after fetching product data
            if (productData && productData.gallery.length > 0) {
                setMainImage(productData.gallery[0].image);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="product-detail-page">
                <TopPath prepath={`Category / ${product.category.title} / `} mainpath={product.title} />
                <div className="product-detail-item">
                    <div className="product-detail-item-left row">
                        <div className="product-detail-item-left-images-choose col">
                            {product.gallery.map((image, index) => (
                                <img key={index} src={image.image} alt={product.title} onClick={() => setMainImage(image.image)} />
                            ))}
                        </div>
                        <div className="product-detail-item-image-main">
                            {/* Render the main image */}
                            {mainImage && <img src={mainImage} alt={product.title} />}
                        </div>
                    </div>
                    <div className="product-detail-item-right">
                        <h2>{product.title}</h2>
                        <div className="product-detail-rating">
                            {/* Render rating stars here */}
                            <div className="product-detail-rating-icons">
                                {[...Array(product.rating)].map((_, index) => (
                                    <i key={index} className="fa fa-star"></i>
                                ))}
                                {[...Array(5 - product.rating)].map((_, index) => (
                                    <i key={index + product.rating} className="fa-regular fa-star"></i>
                                ))}
                            </div>
                            <p>{`${product.rating_count} reviews`} <hr /></p>
                            <span>{product.in_stock ? 'In Stock' : 'Out of Stock'}</span>
                        </div>
                        <p className="product-detail-price">{`$${product.price}`}</p>
                        <p>{product.description}</p>
                        <hr />
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
                            id:1,
                            productName:'apple',
                            productPrice : 16,
                            categoryName : '',
                            rating:3,
                            discount: 40,
                            img:'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=hsBPt3DQ'
                        },
                        {
                            id:2,
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
