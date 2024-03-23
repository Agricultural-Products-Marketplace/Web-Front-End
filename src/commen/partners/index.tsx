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
            {logo.map((image,index)=>(
                <div className="partners-logo" key={index}>
                <img src={image.image} alt="" />
            </div>
            ))}
        </div>
    )
}

export default PartnersCard;