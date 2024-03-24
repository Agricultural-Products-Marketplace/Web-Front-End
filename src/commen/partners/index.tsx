import React from "react";
import './index.css';

interface Logo{
    image:string
}

interface PartnersCardProps{
    logo : Logo[]
}

function PartnersCard({logo}:PartnersCardProps) {
    return(
        <div className="partners-card">
            <div className="partners-title">
                <p><hr />Partners</p>
            </div>
            <div className="partners-logo">
            {logo.map((image,index)=>(
                
                <img src={image.image} key={index} alt="" />
            
            ))}
            </div>
        </div>
    )
}

export default PartnersCard;