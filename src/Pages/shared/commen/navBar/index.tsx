import React from 'react';
import './index.css'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItemCount } from '../../../../redux/selecters/cartSelecter';


const NavBar: React.FC = () => {

    const cartItemCount = useSelector(getCartItemCount);
    const location = useLocation();
    const { pathname } = location;
    return(pathname === '/admin' || pathname === '/signup/customer' || pathname === '/signIn' || pathname === '/signUp/' || pathname === '/signUp' || pathname === '/success'? null : <section className="navbar">
    <a href="#123" className="navbar_logo">
        <img src="./assets/img/logo.png" alt="" />
        <hr/>
        <p>Agricultural <br/><small>market place</small> </p>
    </a>
    <div className="navigation_bar">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/category'}>Category</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/signUp/'}>Register</Link></li>
            <li><Link to={'/signUp/'}>Log In</Link></li>
        </ul>
    </div>
    
        <div className="search_bar">
            <input type="text" placeholder="What are you looking for?"/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    
    <div className="icons">
    <Link to={'/add-product'}><i className="fa-solid fa-add"></i><small>Product</small></Link>
    <Link to={'/wishlist'}><i className="fa-solid fa-heart"></i></Link>
    <Link to={'/message'} ><i className='fa-solid fa-message'><sup>8</sup></i></Link>
    <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"><sup>{cartItemCount}</sup></i></Link>
    <a href="#" className='icons-user-icon'><i className="fa-solid fa-user"></i>
    <div className="account-dropdown-menus">
        <Link to={'/account'}>
            <i className="fa fa-user"></i>
            Manage My Account
        </Link>
        <a href="">
            <i className="fa-solid fa-cart-shopping"></i>
            My Order
        </a>
        <a href="">
            <i className="fa fa-close"></i>
            My Cancelations
        </a>
        <a href="">
            <i className="fa fa-star"></i>
            My Reviews
        </a>
        <a href="">
        <i className="fa-solid fa-right-from-bracket"></i>
            LogOut
        </a>
    </div>
    </a>
    </div>

    <a href="#" className='navbar-dropdown-menus'><i className="fa-solid fa-user"></i>
    <div>
    <Link to={'/signUp/'}>Sign Up</Link>
    <Link to={'/'}>Home</Link>
    <Link to={'/contact'}>Contact</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/wishlist'}>Wishlist</Link>
    <Link to={'/message'}>Messge</Link>
    <Link to={'/cart'}>Cart</Link>
    <Link to={'/account'}>Manage My Account</Link>
    <Link to={'/'}>Log Out</Link>
    
    </div>
    </a>
    
</section>
    );
}

export default NavBar;