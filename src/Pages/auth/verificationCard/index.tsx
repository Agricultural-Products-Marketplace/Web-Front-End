import React from "react";
import './index.css';
import TopBar from "../../../commen/topBar";
import Footer from "../../../commen/footer";
import { link } from "fs";

interface VerificationCardProps{
    title : string
    link:string
}

function VerifivationCard({title,link}:VerificationCardProps) {
    return(
        <div>
            <div className="email-verification-container">
                <div className="email-verification">
                    <a href="#"><i className="fa fa-arrow-left"></i></a>
                    <h3>{title}</h3>
                    <p>We have Sent an email to your email account with Verification code</p>
                    <h6>Verification Code</h6>
                    <input type="text" />
                    <a href={link} className="email-verification-verify-button">Verify</a>
                </div>
            </div>
        </div>
    )
}

export default VerifivationCard;