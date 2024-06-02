import React from "react";
import './index.css';
import WishlistCard from "../shared/card/wishlistCard";
import Product from "../shared/card/product";
import NavBar from "../shared/commen/navBar";
import TopPath from "../shared/commen/topPath";




function WishList() {
    return(
        <>
        <div className="wishlist col">
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
               
               <div className="wishlist-for-you col">
               <div className="wishlist-for-you-title row">
                <p className="row"><hr />Just For You</p>
                <a href="#">See All</a>
               </div>
               <div className="wishlist-for-you-products">
                <Product 
                products={[{
                    id:1,
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