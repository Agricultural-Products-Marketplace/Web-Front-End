import React, { useEffect, useState } from "react";
import './index.css';
import SliderCard from "../shared/card/slider";
import ProductSlider from "../shared/card/productSlider";
import AdCard from "../shared/card/adCard";
import ServicesCard from "../shared/commen/services";
import PartnersCard from "../shared/commen/partners";
import { getAllCategories } from "../../services/category/getCategory";
import SliderLoading from "../shared/card/Loadings/sliderLoading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";import { fetchWebInfoService, getpartnersinfo, getsupportinfo } from "../../services/website/webinfo";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Category } from "../../model/category";
import { fetchWishlists } from "../../services/wishlist/getwishlist";

function Home() {
    const dispatch: AppDispatch = useDispatch();
    const [categories, setCategories] = useState<Category[]>([]);
    const isAuth = useSelector((state:RootState)=>state.login.isAuthenticated);
    const userId = useSelector((state:RootState)=>state.user.profile?.id);
    const accessKey = useSelector((state:RootState)=>state.login.user?.access);

    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
        if(isAuth){
            fetchWishlists(Number(userId),String(accessKey));
        }
    },

    

[]);

useState(()=>{
    getpartnersinfo();
    getsupportinfo();
});

const user = useSelector((state:RootState)=> state.user.profile);


    return(
        <div className="home">
            
            <div className="slider-category row">
                <SliderCard />
            </div>
            {(categories.length === 8)?(
                <SliderLoading />
            ):(
                <ProductSlider 
            title="Flash Deals"
            slog="today's"
            category={[]}
            products={
                [
            ]
            }
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
            
            {(categories.length === 8)?(
                <SliderLoading />
            ):(
                <ProductSlider 
            title="Most Viewed products"
            slog="This Month"
            products={[]}
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
            <PartnersCard 
            logo={[
                {
                    link : 'https://www.ethiotelecom.et/?lang=am',
                    image:'https://asset.brandfetch.io/idLRVBoY1U/id-DxrNKOS.png'
                }
                ,{
                    image:'https://banksethiopia.com/wp-content/uploads/chapa-1-1024x387.png',
                    link : 'https://chapa.co/'
                },{
                    image:'https://upload.wikimedia.org/wikipedia/en/a/a4/Telebirr.png',
                    link :'https://www.ethiotelecom.et/telebirr/'
                },{
                    image:'https://lh3.googleusercontent.com/proxy/ECwnBLW5b6CaLHwlIieXNmZxl8a7UTnoYagDbnYl7xh6TFl4JPW4WKwvjSLH2XxTVynggqpVHBlyVXoYsHo325UNaoPjwv3B5ZY6Dls',
                    link:'https://www.ata.gov.et/'
                },{
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQdgTFTODInpTiuipvGhi0D8evlvLfSKP5FB8Lv8SkA&s',
                    link:'https://dashenbanksc.com/amole-payment-services/'
                },{
                    image:'https://play-lh.googleusercontent.com/MVbz19A7grAubrwQYrcm2fK_WQUSKv0y4susWE2x8YGElMkOaMdgFHpVpSnqH2gtAZHD=w720-h405-rw',
                    link:'https://www.apollo.io/companies/Bank-of-Abyssinia/5edba375c558ae0001a88072?chart=count'
                }
            ]}
            />
        </div>
    )
}

export default Home;