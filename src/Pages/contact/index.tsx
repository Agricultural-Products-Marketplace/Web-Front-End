import React from "react";
import './index.css';
import NavBar from "../shared/commen/navBar";
import TopPath from "../shared/commen/topPath";

function Contact() {
    return(
        <>
        <div className="contact-page">
            <TopPath
            prepath="Home / "
            mainpath="Contact"
            />

            <div className="contact-page-info">
                <div className="contact-page-info-left">
                    <div className="contact-page-item col">
                        <div className="row">
                            <i className="fa fa-phone contact-icon"></i>
                            <h4>Call Now</h4>
                        </div>
                        <p>We Are Avilable 24/7, 7 Days a Week</p>
                        <p>Phone : +251 91 297 8713</p>
                    </div>
                    <hr />
                    <div className="contact-page-item col">
                        <div className="row">
                            <i className="fa-regular fa-envelope contact-icon"></i>
                            <h4>Message</h4>
                        </div>
                        <p>Fill Out Our Form and We Will contact You within 24 hours</p>
                        <p>Email : Customer@griproducts.com</p>
                        <p>Email : Support@agriproducts.com</p>
                    </div>
                </div>
                <div className="contact-page-right">
                    <form action="" className="col">
                        <div className="contact-page-form-user-info row">
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