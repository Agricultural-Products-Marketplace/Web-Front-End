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

function App() {
  return (
    <div>
      <TopBar/>
      <NavBar />
      <div className="both">
        <CategoryCard/>
        <SliderCard/>
      </div>
      <CategoryButtonCard/>
      <Footer/>
    </div>
  );
}

export default App;
