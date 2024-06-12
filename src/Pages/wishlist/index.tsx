import './index.css';
import WishlistCard from "../shared/card/wishlistCard";
import Product from "../shared/card/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { AppDispatch } from "../../redux/store";
import { fetchWishlists } from '../../services/wishlist/getwishlist';
import ProductModel from '../../model/product';
import { useEffect, useState } from 'react';
import { ProductModelMain } from '../../model/productDetail';
import { fetchWishlistsAction } from '../../redux/actions/wishlistAction';





function WishList() {
    
  const user = useSelector((state:RootState)=> state.user.profile?.user);
  const [wishlists, setWishlists] = useState<ProductModelMain[]>([]);
  const [error, setError] = useState<string | null>(null);
  const accessToken = useSelector((state:RootState)=> state.login.user?.access);
  const userId = useSelector((state:RootState)=>state.user.profile?.id);

  useState(() => {
    async function loadWishlists() {
      try {
        const response = await fetchWishlists(Number(userId),String(accessToken));
        if (response.status === 200) {
          localStorage.setItem("wishlistData",JSON.stringify(response.data));
          setWishlists(response.data);
        } else {
          setError('Failed to fetch wishlists');
        }
      } catch (err) {
        setError('An error occurred while fetching wishlists');
      }
    }

    loadWishlists();
  });



    return(
        <>
        <div className="wishlist col">
            <div className="wishlist-title">
                <h3>WishList ({40})</h3>
                <a href="#">Move all to bag</a>    
            </div> 
            <div className="wishlist-products">
               {
                wishlists.map((product,index)=>(
                    <WishlistCard 
                    key={index}
                    id={product.product.id}
                    productName={product.product.title}
                    discount={product.product.old_price}
                    productPrice={product.product.price}
                    rating={product.product.rating}
                    img={product.product.image}
                    categoryName={product.product.category.title}
                    isFetured={product.product.featured}
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