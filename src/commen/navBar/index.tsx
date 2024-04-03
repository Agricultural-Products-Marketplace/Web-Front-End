import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <section className="navbar">
            <a href="#" className="navbar_logo">
                <img src="./assets/img/logo.png" alt="" />
                <hr/>
                <p>Agricultural <br/><small>market place</small> </p>
            </a>
            <div className="navigation_bar">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/signUp/'}>Sign Up</Link></li>
                </ul>
            </div>
            
                <div className="search_bar">
                    <input type="text" placeholder="What are you looking for?"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            
            <div className="icons">
            <Link to={'/wishlist'}><i className="fa-regular fa-heart"></i></Link>
            <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"><sup>2</sup></i></Link>
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
            
        </section>
    );
}

export default NavBar;