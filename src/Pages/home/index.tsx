import React, { useEffect, useState } from "react";
import './index.css';
import TopBar from "../shared/commen/topBar";
import NavBar from "../shared/commen/navBar";
import SliderCard from "../shared/card/slider";
import CategoryCard from "../shared/card/category";
import ProductSlider from "../shared/card/productSlider";
import AdCard from "../shared/card/adCard";
import ServicesCard from "../shared/commen/services";
import PartnersCard from "../shared/commen/partners";
import Footer from "../shared/commen/footer";
import { Category, getAllCategories } from "../../services/category/getCategory";

function Home() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    },
[]);
    return(
        <div className="home">
            <div className="slider-category row">
                <SliderCard />
            </div>
            <ProductSlider 
            title="Flash Deals"
            slog="today's"
            products={
                [{
                    id:1,
                    productName:"Mango",
                    productPrice : 120,
                    rating : 4,
                    discount : 25,
                    img : "https://media.istockphoto.com/id/529964085/photo/mango.jpg?s=612x612&w=0&k=20&c=rmcMZlLOZFdn4NhUcjnaJ3EBHKYZQ4xH4xzpzFU4JgY=",
                    categoryName : ""
                },
                {
                    id:2,
                    productName:"Apple",
                    productPrice : 200,
                    rating : 5,
                    discount : 10,
                    img : "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
                    categoryName : ""
                },
                {
                    id:3,
                    productName:"PineApple",
                    productPrice : 250,
                    rating : 4,
                    discount : 20,
                    img : "https://static.libertyprim.com/files/familles/ananas-large.jpg?1569271716",
                    categoryName : ""
                },
                {
                    id:4,
                    productName:"Watermelon",
                    productPrice : 165,
                    rating : 3,
                    discount : 60,
                    img : "https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-04/watermeloen_2.jpg?itok=hsBPt3DQ",
                    categoryName : ""
                },
                {
                    id:5,
                    productName:"Banana",
                    productPrice : 100,
                    rating : 5,
                    discount : 45,
                    img : "https://chefsmandala.com/wp-content/uploads/2018/03/Banana.jpg",
                    categoryName : ""
                },
                {
                    id:6,
                    productName:"Orange",
                    productPrice : 135,
                    rating : 2,
                    discount : 30,
                    img : "https://thumbs.dreamstime.com/b/orange-fruit-22884921.jpg",
                    categoryName : ""
                }
            ]
            }
            />
            <ProductSlider 
            slog="category"
            title="Brows By Category"
            products={
                categories.map(category=>(
                    {
                        id:category.id,
                    productName:"",
                    productPrice : 0,
                    rating : 0,
                    discount : 0,
                    img : category.image,
                    categoryName : category.title

                    }
                ))
            }
            />
            <ProductSlider 
            title="Most Viewed products"
            slog="This Month"
            products={
                [{
                    id:1,
                    productName:"Apple",
                    productPrice : 200,
                    rating : 5,
                    discount : 10,
                    img : "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
                    categoryName : ""
                },
                {
                    id:2,
                    productName:"PineApple",
                    productPrice : 250,
                    rating : 4,
                    discount : 20,
                    img : "https://static.libertyprim.com/files/familles/ananas-large.jpg?1569271716",
                    categoryName : ""
                },
            ]
            }
            />
            <AdCard />
            <ProductSlider 
            title="Explore The Products"
            slog="Our Products"
            products={
                [{
                    id:1,
                    productName:"Rice",
                    productPrice : 165,
                    rating : 3,
                    discount : 30,
                    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zc6uCIB6x5cmZewJ_g5ebZmbLBpcS2EBLWDuo_PjxQ&s",
                    categoryName : ""
                },
                {
                    id:2,
                    productName:"Rice",
                    productPrice : 165,
                    rating : 3,
                    discount : 30,
                    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zc6uCIB6x5cmZewJ_g5ebZmbLBpcS2EBLWDuo_PjxQ&s",
                    categoryName : ""
                }
            ]
            }
            />

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