import React from "react";
import './index.css';

interface TopPathProps{
    mainpath : string
    prepath : string
}

function TopPath({mainpath,prepath}:TopPathProps) {
    return(
        <div className="about-page-top-path">
                <p>{prepath}<span>{mainpath}</span></p>
            </div>
    )
}

export default TopPath;