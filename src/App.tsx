import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar  from "./commen/topBar";
import Footer  from "./commen/footer";
import NavBar  from "./commen/navBar";
import SliderCard from "./card/slider";
import CategoryCard from "./card/category";
import ProductSlider from './card/productSlider';
import CategoryButtonCard from './card/categoryCard';
import AdCard from './card/adCard';
import ServicesCard from './commen/services';
import PartnersCard from './commen/partners';

function App() {
  return (
    <div>
      <TopBar/>
      <NavBar />
      <div className="both">
        <CategoryCard/>
        <SliderCard/>
      </div>
      <ProductSlider 
      title='Flash Deals'
      slog='Todays'
      products={[
        {
          productName: "Ageda",
          productPrice: 36,
          rating: 3,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Foods"
      },
      {
          productName: "Ageda",
          productPrice: 36,
          rating: 3,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Fruits"
      },
      ]}
      />
      <ProductSlider 
      title='Browse By Category'
      slog='category'
      products={[
        {
          productName: "",
          productPrice: 0,
          rating: 0,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 0,
          categoryName:"Fruits"
        }
      ]}
      />
      <ProductSlider 
      slog='This Month'
      title='Most Viewed Products'
      products={[
        {
          productName: "Ageda",
          productPrice: 36,
          rating: 3,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Foods"
      },
      {
          productName: "Ageda",
          productPrice: 36,
          rating: 5,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Fruits"
      },
      ]}
      />
      <AdCard />
<ProductSlider 
      slog='Our Products'
      title='Explore The Products'
      products={[
        {
          productName: "Ageda",
          productPrice: 36,
          rating: 3,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Foods"
      },
      {
          productName: "Ageda",
          productPrice: 36,
          rating: 5,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Fruits"
      },
      {
          productName: "Ageda",
          productPrice: 36,
          rating: 5,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Fruits"
      },
      {
          productName: "Ageda",
          productPrice: 36,
          rating: 5,
          img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
          discount: 2,
          categoryName:"Fruits"
      }
      ]}
      />
      <ServicesCard />

      <PartnersCard 
      logo={[
        {
          image :'https://asset.brandfetch.io/idLRVBoY1U/id-DxrNKOS.png',
          link : 'https://www.ethiotelecom.et/?lang=am'
        },
        {
          image :'https://banksethiopia.com/wp-content/uploads/chapa-1-1024x387.png',
          link: 'https://chapa.co/'
        },
        {
          image :'https://lh3.googleusercontent.com/proxy/ECwnBLW5b6CaLHwlIieXNmZxl8a7UTnoYagDbnYl7xh6TFl4JPW4WKwvjSLH2XxTVynggqpVHBlyVXoYsHo325UNaoPjwv3B5ZY6Dls',
          link : 'https://www.ata.gov.et/'
        },
        {
          image :'https://www.moderntechethiopia.com/wp-content/uploads/2021/05/TeleBirr-Logo.png',
          link : 'https://www.ethiotelecom.et/telebirr/'
        }
      ]}
      />

      <div className="category-card-button-slider">
      </div>
      <Footer/>
    </div>
  );
}

export default App;
