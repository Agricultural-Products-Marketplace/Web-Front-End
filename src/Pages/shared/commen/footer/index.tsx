import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';


function Footer() {
    const location = useLocation();
    const { pathname } = location;
    return pathname === '/admin'|| pathname === '/signup/agent' || pathname === '/forget-password' || pathname === '/create-new-password' ||pathname === '/signup/customer' || pathname === '/signin' || pathname === '/message' || pathname === '/signUp/' || pathname === '/signUp' || pathname === '/account'|| pathname === '/success' ? null :<section className="footer_section">
    <div className="footer">
    <div className="footer_a">
        <div className="footer_a_logo">
            <img src="./assets/img/logo.png" alt="" />
            <hr/>
            <p>Agrocultural products<br/>Fair Price Healthy Life</p>
        </div>
        <p>Get 10% off Your First Order</p>
        <div className="footer_a_input">
        <input type="text" placeholder="Enter Your Email"/>
        <button><i className="fa-solid fa-paper-plane"></i></button>
        </div>
    </div>

    <div className="footer_b">
        <h3>Support</h3>
        <p>5-Kilo Addis Ababa,<br/>P.O.B,1000, Ethiopia.</p>
        <p>contact@agricaulturalmarketplace.com</p>
        <p>+251 91 297 8713</p>
    </div>

    <div className="footer_c">
        <h3>Account</h3>
        <a href="">My Account</a>
        <a href="">Login / Register</a>
        <a href="">Cart</a>
        <a href="">Wishlist</a>
        <a href="">Shop</a>
    </div>

    <div className="footer_d">
        <h3>Quick Link</h3>
        <a href="">Privacy Policy</a>
        <a  href="">Terms of Use</a>
        <a href="">FAQ</a>
        <a href="">Contact</a>
    </div>

    <div className="footer_e">
        <h3>Download App</h3>
        <small>save $3 with App New User Only</small>
        <div className="footer_e_imgs_a">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZv8LDfT6O_ukI2HInpPOjrfBGDwVEOxxKtcXQocXvw&s" alt="" />
            <div className="footer_e_imgs">
                <img src="https://e7.pngegg.com/pngimages/52/715/png-clipart-google-play-logo-google-play-computer-icons-app-store-google-text-logo.png" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="" />
            </div>
        </div>
        <div className="footer_e_social_links">
            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
            <a href=""><i className="fa-brands fa-square-instagram"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
        </div>
    </div>
</div>
<div className="copy_right"> <p> &copy; Copyright E-commerce 2023. All right reserved</p></div>
</section>;
}

export default Footer;