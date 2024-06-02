import React from "react";
import './index.css';

function ServicesCard() {
    return(
        <div className="services-card">
            <div className="service-item">
                <div className="service-item-icon">
                    <i className="fa-solid fa-truck-fast"></i>
                </div>
                <strong>FREE AND FAST DELIVERY</strong>
                <p>Free Delivery for all orders over $140</p>
            </div>

            <div className="service-item">
                <div className="service-item-icon">
                <i className="fa-solid fa-headset"></i></div> 
                <strong>24/7 CUSTOMER SERVICE</strong>
                <p>Frendly 24/7 customer support</p>
            </div>

            <div className="service-item">
                <div className="service-item-icon">
                <i className="fa-solid fa-money-check-dollar"></i>
                </div>
                <strong>MONEY BACK GUARENTEE</strong>
                <p>We return money within 30 days</p>
            </div>
        </div>
    )
}

export default ServicesCard;