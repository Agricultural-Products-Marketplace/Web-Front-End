import React from "react";
import './index.css';
import WishlistCard from "../../card/wishlistCard";
import Product from "../../card/product";
import NavBar from "../../commen/navBar";
import TopPath from "../../commen/topPath";




function WishList() {
    return(
        <>
        <NavBar />
        <div className="wishlist">
            <div className="wishlist-title">
                <h3>WishList ({40})</h3>
                <a href="#">Move all to bag</a>    
            </div> 
               <WishlistCard 
               products={[
                {
                    productName:"Rice",
                    productPrice : 165,
                    rating : 3,
                    discount : 30,
                    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zc6uCIB6x5cmZewJ_g5ebZmbLBpcS2EBLWDuo_PjxQ&s",
                },
               ]}
               />
               
               <div className="wishlist-for-you">
               <div className="wishlist-for-you-title">
                <p><hr />Just For You</p>
                <a href="#">See All</a>
               </div>
               <div className="wishlist-for-you-products">
                <Product 
                products={[{
                    productName:"Rice",
                    productPrice : 165,
                    rating : 3,
                    discount : 30,
                    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zc6uCIB6x5cmZewJ_g5ebZmbLBpcS2EBLWDuo_PjxQ&s",
                    categoryName : ''
                }]}
                /> 
               </div>
               </div>
            </div> 
        </> 
    )
}

export default WishList;