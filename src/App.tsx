import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import TopBar from "./commen/topBar";
import Footer from "./commen/footer";
import NavBar from "./commen/navBar";
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

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/customer" element={<CustomerSignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<MyAccount />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/cart/checkout' element={<BillingDetail />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
