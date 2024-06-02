import React from "react";
import './index.css';




function AboutStatusCard() {
    const Status = [{
        Icon: 'fa fa-shop',
        SNumber : '10.5',
        Title : 'sallers Active Our Site'
    },
    {
        Icon: 'fa-solid fa-dollar-sign',
        SNumber : '33',
        Title : 'Monthly Product Sale'
    },
    {
        Icon: 'fa-solid fa-gift',
        SNumber : '45.5',
        Title : 'Customers active in our Site'
    },
    {
        Icon: 'fa-solid fa-sack-dollar',
        SNumber : '25',
        Title : 'Anual gross sale in our Site'
    },
    
    

]
    return(
        
        <div className="about-page-company-status">
            {Status.map((status,index)=>(
                <div className="about-status-card" key={index}>
                <div className="about-status-card-icon">
                    <i className={status.Icon}></i>
                </div>
                <div className="about-status-card-number"><p>{status.SNumber}k</p></div>
                <div className="about-status-card-title">
                    <small>{status.Title}</small>
                </div>
            </div>
            ))}
        </div>
    )
}

export default AboutStatusCard;