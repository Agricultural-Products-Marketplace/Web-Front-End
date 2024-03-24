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
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><Link to={'/auth/signUp/'}>Sign Up</Link></li>
                </ul>
            </div>
            
                <div className="search_bar">
                    <input type="text" placeholder="What are you looking for?"/>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            
            <div className="icons">
            <a href="#"><i className="fa-regular fa-heart"></i></a>
            <a href="#"><i className="fa-solid fa-cart-shopping"><sup>2</sup></i></a>
            <a href="#"><i className="fa-solid fa-user"></i></a>
            </div>
        </section>
    );
}

export default NavBar;