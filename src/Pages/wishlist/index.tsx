import './index.css';
import WishlistCard from "../shared/card/wishlistCard";
import Product from "../shared/card/product";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { useState } from 'react';






function WishList() {
    
  const user = useSelector((state:RootState)=> state.user.profile?.user);
  const [error, setError] = useState<string | null>(null);
  const accessToken = useSelector((state:RootState)=> state.login.user?.access);
  const userId = useSelector((state:RootState)=>state.user.profile?.id);
  const wishlists = useSelector((state:RootState)=>state.wishlist.items);



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
                products={[]}
                /> 
               </div>
               </div>
            </div> 
        </> 
    )
}

export default WishList;