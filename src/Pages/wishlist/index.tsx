import React from "react";
import './index.css';
import WishlistCard from "../../card/wishlistCard";




function WishList() {
    return(
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
            </div>  
    )
}

export default WishList;