import React from "react";
import './index.css';

interface TopPathProps{
    path : string
}

function TopPath({path}:TopPathProps) {
    return(
        <div className="about-page-top-path">
                <p>Home / <span>{path}</span></p>
            </div>
    )
}

export default TopPath;