import React from "react";
import './index.css';
import Product from '../product/index';

interface DevelopersCardProps{
    Name : string,
    Position : string
    Image: string
    Facebook : string
    Instagram : string
    Linkedin : string
    Github : string
}

function DevelopersCard({Name,Image,Position,Facebook,Instagram,Linkedin,Github}:DevelopersCardProps) {
    return(
        <div className="developers-card">
            <img src={Image} alt="" />
            <h3>{Name}</h3>
            <small>{Position}</small>
            <div className="developer-social-media-linnk">
                <a href={Facebook} target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                <a href={Instagram} target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href={Linkedin} target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href={Github} target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default DevelopersCard;