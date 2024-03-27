import React from "react";
import './index.css';
import NavBar from "../../commen/navBar";
import TopPath from "../../commen/topPath";

function Contact() {
    return(
        <>
        <NavBar />
        <div className="contact-page">
            <TopPath 
            path="Contact"
            />

            <div className="contact-page-info">
                <div className="contact-page-info-left">
                    <div className="contact-page-item">
                        <div>
                            <i className="fa fa-phone contact-icon"></i>
                            <h4>Call To Us</h4>
                        </div>
                        <p>We Are Avilable 24/7, 7 Days a Week</p>
                        <p>Phone : +251 91 297 8713</p>
                    </div>
                    <hr />
                    <div className="contact-page-item">
                        <div>
                            <i className="fa-regular fa-envelope contact-icon"></i>
                            <h4>Write To us</h4>
                        </div>
                        <p>Fill Out Our Form and We Will contact You within 24 hours</p>
                        <p>Email : Customer@griproducts.com</p>
                        <p>Email : Support@agriproducts.com</p>
                    </div>
                </div>
                <div className="contact-page-right">
                    <form action="">
                        <div className="contact-page-form-user-info">
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Your Email"/>
                            <input type="text" placeholder="Your Phone"/>
                        </div>
                        <div className="contact-page-form-user-message">
                            <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
                        </div>
                        <div className="contact-page-form-button">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;