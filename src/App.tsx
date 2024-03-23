import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar  from "./commen/topBar";
import Footer  from "./commen/footer";
import NavBar  from "./commen/navBar";
import SliderCard from "./card/slider";
import CategoryCard from "./card/category";
import ProductCard from "./card/product";

function App() {
  const products = [
    {
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7YVShudYxriOXhiQbu-jm193UnQbFkx-7Zh7U0E5Ww&s",
        Name: "Product 1",
        Price: 19.99,
        Discount: 10
    },
    {
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpqdR3b_RbWoy2JeqIymgL_eG5IxCA0Rvz1WspFmlDw&s",
        Name: "Product 2",
        Price: 29.99,
        Discount: 15
    },
    // Add more product objects as needed
];
  return (
    <div>
      <TopBar/>
      <NavBar />
      <div className="both">
        <CategoryCard/>
        <SliderCard/>
      </div>
      <div className="product_list_items">
        <ProductCard products={products} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
