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
import Home from './Pages/home';
import SignUp from './Pages/auth/signUp';
import CustomerSignUp from './Pages/auth/signUp/customerSignup';

function App() {
  return (
    <div>
      <CustomerSignUp />
    </div>
  );
}

export default App;
