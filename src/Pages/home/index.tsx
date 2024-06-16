import React, { useEffect, useState } from "react";
import './index.css';
import SliderCard from "../shared/card/slider";
import ProductSlider from "../shared/card/productSlider";
import AdCard from "../shared/card/adCard";
import ServicesCard from "../shared/commen/services";
import PartnersCard, { Logo } from "../shared/commen/partners";
import { getAllCategories } from "../../services/category/getCategory";
import SliderLoading from "../shared/card/Loadings/sliderLoading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";import { fetchWebInfoService, getpartnersinfo, getsupportinfo } from "../../services/website/webinfo";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Category } from "../../model/category";
import { fetchWishlists } from "../../services/wishlist/getwishlist";
import { fetchcart } from "../../services/cart/getcart";
import { addToCart } from "../../redux/actions/cartAction";
import { CartModel } from "../../model/cart";
import { getAllProducts, getFeaturedProducts } from "../../services/product/getProducts";
import { ProductModel } from "../../model/product";

function Home() {
    const dispatch: AppDispatch = useDispatch();
    const [categories, setCategories] = useState<Category[]>([]);
    const [featuredProducts, setFeaturedProducts] = useState<ProductModel[]>([]);
    const [allProducts,setAllProducts] = useState<ProductModel[]>([]);
    const [partners,setPartners] = useState<Logo[]>([]);
    const isAuth = useSelector((state:RootState)=>state.login.isAuthenticated);
    const userId = useSelector((state:RootState)=>state.user.profile?.id);
    const accessKey = useSelector((state:RootState)=>state.login.user?.access);


    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
            const featuredData = await getFeaturedProducts();
            setFeaturedProducts(featuredData);
            const allproductsData = await getAllProducts();
            setAllProducts(allproductsData);
            const partnersData = await getpartnersinfo();
            setPartners(partnersData.data);
        };
        const fetchUserDatas = async () => {
            if(isAuth && userId && (localStorage.getItem("UserCartData") === '' || localStorage.getItem("UserCartData") === null)){
                
                    // fetchWishlists(Number(userId),String(accessKey));
                const response = await fetchcart(Number(userId),String(accessKey));
                for(let i = 0;i<response.data.length;i++){
                    dispatch(addToCart(response.data[i]));
                }
                
            }
        }
        fetchData();
        fetchUserDatas();

        
    },
[isAuth, userId, accessKey, dispatch]);

    

useState(()=>{
    
    getsupportinfo();
});

const user = useSelector((state:RootState)=> state.user.profile);


    return(
        <div className="home">
            
            <div className="slider-category row">
                <SliderCard />
            </div>
            {(featuredProducts.length === 0)?(
                <SliderLoading />
            ):(
                <ProductSlider 
            title="Featured Products"
            slog="today's"
            category={[]}
            products={featuredProducts}
            />
            )}
            {(categories.length === 0) ? (
               <SliderLoading />
            ) :(<ProductSlider 
            slog="category"
            title="Brows By Category"
            products={[]}
            category= {
                categories
            }
            />)}
            
            {(allProducts.length ===0 )?(
                <SliderLoading />
            ):(
                <ProductSlider 
            title="Most Viewed products"
            slog="This Month"
            products={allProducts}
            category={[]}
            />
            )}
            
            <AdCard />
            {(categories.length === 8)?(
                <SliderLoading />
            ):(
                <ProductSlider 
                title="Explore The Products"
                slog="Our Products"
                category={[]}
                products={
                    [
                ]
                }
                />
            )}

            <ServicesCard />
            {/* <PartnersCard 
            logo={partners}
            /> */}
        </div>
    )
}

export default Home;