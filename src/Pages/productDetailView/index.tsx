import React, { useState, useEffect, ChangeEvent } from "react";
import './index.css';
import NavBar from "../shared/commen/navBar";
import TopPath from "../shared/commen/topPath";
import { getProductById } from '../../services/product/getProducts';
import ServicesCard from "../shared/commen/services";
import ProductSlider from "../shared/card/productSlider";
import ProductDetailLoading from "../shared/card/Loadings/ProductDetailLoading";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import ProductReviews from "../shared/card/reviews";
import { ProductModel } from "../../model/product";
import { addProductReview } from "../../services/product-review/add-product-review";
import { ReviewModel } from "../../model/productReviewModel";
import { fetchProductReviewbyId } from "../../services/product-review/get-product-Review";

function ProductDetail() {
    const [product, setProduct] = useState<ProductModel | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState<string | undefined>(undefined); // Initialize with undefined
    const [rating, setRating] = useState(0);
    const [reviewMessage, setReviewMessage] = useState<string>("");
    const [reviews,setReviews] = useState<ReviewModel[]>([]);
    const accessKey = useSelector((state:RootState)=>state.login.user?.access);
    const userID = useSelector((state:RootState)=>state.user.profile?.id);
    const isAuthenticated = useSelector((state:RootState)=>state.login.isAuthenticated);
    
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
                const reviewData = await fetchProductReviewbyId(Number(productId));
                setReviews(reviewData.data);
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
        return (
            <ProductDetailLoading />
        );
    }

    const handleStarClick = (value: React.SetStateAction<number>) => {
        setRating(value);
    };

    const handleChangeReview = (e: ChangeEvent<HTMLInputElement>) => {
        setReviewMessage(e.target.value);
    };

//     const reviews = [{
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     },
//     {
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     },
//     {
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     },
//     {
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     },
//     {
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     },
//     {
//         user:"Yosef Sahle",
//         image:"./assets/img/logo.png",
//         message:"hello world",
//         date:"12/16/2024"
//     }
// ]

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
                            <button className="buy-now-btn">Add To Cart</button>
                            {/* {(isfavorite.includes(product.id))?(<button className="add-towishlist-button"><i className="fa-solid fa-heart" style={{color:"gold"}}></i></button>):<button className="add-towishlist-button"><i className="fa-regular fa-heart"></i></button>} */}
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

                <div className="product-detail-reviews-overview">
                <div className="product-review-container">
                    {
                        isAuthenticated?(<div className="product-review-container-add-review">
                            <input type="text" 
                            value={reviewMessage}
                            onChange={handleChangeReview}
                            />
                            <div>
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <i key={value}
                                    className={value <= rating ? 'fa-solid fa-star' : 'fa-regular fa-star'} onClick={() => handleStarClick(value)}></i>))}
                            </div>
                            <button style={{fontSize:"17px",fontWeight:"bolder"}}
                            onClick={()=>{
                                addProductReview(String(accessKey),Number(userID),Number(product.id),String(reviewMessage),Number(rating))
                            }}
                            >Submit Review</button>
                            </div>
                        </div>):(null)
                    }
                    <h1>Product Reviews</h1>
                    {
                        
                        (reviews.length > 0)?(
                            reviews.map((review,index)=>(
                                <ProductReviews 
                                user={review.user.first_name +" "+review.user.last_name}
                                image={review.profile.image}
                                message={review.review}
                                date={review.user.date_joined}
                                reviewrId={review.user.id}
                                />
                            ))
                        ):(
                            <h1>No Reviews</h1>
                        )
                    }
                </div>
                <div className="product-overview-container">
                    <div className="product-overview-main">
                        <div className="product-overview-item" >
                            <i className="fa-solid fa-user-check" ></i>
                            <h3>Seller</h3>
                            <p>{product.farmer.user.first_name} {product.farmer.user.last_name}</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-calendar"></i>
                            <h3>Posted Date</h3>
                            <p>{String(product.date)}</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-chart-simple"></i>
                            <h3>Total Sells</h3>
                            <p>254</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-comments"></i>
                            <h3>Toral Reviews</h3>
                            <p>{product.rating_count}</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <h3>Location</h3>
                            <p>Addis Ababa</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-layer-group"></i>
                            <h3>Active Stock</h3>
                            <p>{String(product.in_stock)}</p>
                        </div>
                        <div className="product-overview-item">
                            <i className="fa-solid fa-list"></i>
                            <h3>Category</h3>
                            <p>{product.category.title}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
