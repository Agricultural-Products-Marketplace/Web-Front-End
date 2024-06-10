import React, { useEffect, useState } from "react";
import './index.css';
import WishlistCard from "../shared/card/wishlistCard";
import Product from "../shared/card/product";
import NavBar from "../shared/commen/navBar";
import TopPath from "../shared/commen/topPath";
import { getWishlistById } from "../../services/wishlist/getwishlist";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { AppDispatch } from "../../redux/store";
import { addWishlist, deleteWishlist, fetchWishlist } from "../../redux/actions/wishlistAction";
import { WishlistData } from "../../redux/types";
import ProductModel from "../../model/product";




function WishList() {
    const dispatch: AppDispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.data);
  const user = useSelector((state:RootState)=> state.user.profile?.user);
  const userId:number = user?.id ? user.id : 0;
  const wishlistProducts = wishlist.map(wishlistProduct => wishlistProduct.product);


  useEffect(() => {
    dispatch(fetchWishlist(userId));
  }, [dispatch, userId]);

  const handleAddItem = (ProductId:number ,item: WishlistData) => {
    dispatch(addWishlist({ userId, item,ProductId }));
  };

  const handleDeleteItem = (itemId: number) => {
    dispatch(deleteWishlist({ userId, itemId }));
  };
    return(
        <>
        <div className="wishlist col">
            <div className="wishlist-title">
                <h3>WishList ({40})</h3>
                <a href="#">Move all to bag</a>    
            </div> 
            <div className="wishlist-products">
               {
                wishlistProducts.map((product,index)=>(
                    <WishlistCard 
                    key={index}
                    id={product.id}
                    productName={product.title}
                    discount={product.old_price}
                    productPrice={product.price}
                    rating={product.rating}
                    img={product.image}
                    categoryName={product.category.title}
                    isFetured={product.featured}
                    />
                ))
               }
               </div>
               
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