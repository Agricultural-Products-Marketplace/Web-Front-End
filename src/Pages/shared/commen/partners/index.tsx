import React from "react";
import './index.css';

export interface Logo{
    date:Date;
    id:number;
    image:string;
    name : string;
}

export interface LogoProps{
    data : Logo[],
}


function PartnersCard(logo:LogoProps) {
    return(
        <div className="partners-card">
            <div className="partners-title">
                <p><hr />Partners</p>
            </div>
            <div className="partners-logo">
            {logo.data.map((image,index)=>(
                
                <a href={image.name} target="_blank"><img src={image.image} key={index} alt="" /></a>
            
            ))}
            </div>
        </div>
    )
}

export default PartnersCard;