import React from "react";
import './index.css';
import ProductModel from "../../../../model/product";
import { Link } from "react-router-dom";


interface WishlistCardProps {
    id:number;
    productName: string;
    discount: string;
    productPrice: string;
    rating: number;
    img: string;
    categoryName: string;
    isFetured:boolean
}

const WishlistCard: React.FC<WishlistCardProps> = ({ id,productName,discount,productPrice,rating,img,categoryName,isFetured }) => {
  return (

      <div className="box">
        <div className="slide-img">
          <img src={img} alt={productName} />
          <div className="overlay">
            <div className="overlay-top-icons">
              <p className="discount">{discount}%</p>
              <div className="overlay-icons">
                <a href="#"><i className="fa fa-x"></i></a>
              </div>
            </div>
            <a href="#" className="buy-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="detail-box">
          <div className="type">
            <Link to={`/product-detail?id=${id}`}>{productName}</Link>
            <span>{isFetured?('featured'):('')}</span>
            <div className="rating">
              {[...Array(rating)].map((_, i) => (
                <i key={i} className="fa fa-star"></i>
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <i key={i + rating} className="fa-regular fa-star"></i>
              ))}
            </div>
          </div>
          <div className="price">${productPrice}</div>
        </div>
      </div>
  );
};

export default WishlistCard;
