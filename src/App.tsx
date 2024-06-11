import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from "./Pages/shared/commen/topBar";
import Footer from "./Pages/shared/commen/footer";
import NavBar from "./Pages/shared/commen/navBar";
import Home from './Pages/home';
import SignUp from './Pages/auth/signUp';
import CustomerSignUp from './Pages/auth/signUp/customerSignup';
import SignIn from './Pages/auth/signIn';
import Cart from './Pages/cart';
import WishList from './Pages/wishlist';
import Contact from './Pages/contact';
import About from './Pages/about';
import MyAccount from './Pages/account';
import ProductDetail from './Pages/productDetailView';
import BillingDetail from './Pages/billingDetail';
import Admin from './Pages/admin';
import PageNotFound from './Pages/shared/commen/404';
import Message from './Pages/message';
import AddProduct from './Pages/addProduct';
import VerificationSuccess from './Pages/shared/commen/verification-success';
import Category from './Pages/category';
import { Provider } from 'react-redux';
import store from './redux/store';
import ForgetPassword from './Pages/auth/forgetPasswords';
import ResetPassword from './Pages/auth/resetPassword';


function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [location]);

  return null;
}

function App(): JSX.Element { // Get the location directly

  

  return (
    <Provider store={store}> 
    <Router>
      <div>
        <TopBar />
        <NavBar />
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/customer" element={<CustomerSignUp />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/category' element={<Category />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<MyAccount />} />
          <Route path='/message' element={<Message />}/>
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/cart/checkout' element={<BillingDetail />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/success' element={<VerificationSuccess />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
