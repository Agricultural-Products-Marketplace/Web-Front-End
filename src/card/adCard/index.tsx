import React from "react";
import './index.css';

function AdCard() {
    return(
        <div className="slider-products">
            <div className="ad-container">
                
                <div className="ad-overlays">
                    <small>Category</small>
                    <p>Organic Products for Healthy life with fair price</p>
                    <div className="ad-time-display">
                        <div className="ad-time-display-item">
                            <strong>05</strong>
                            <p>Days</p>
                        </div>
                        <div className="ad-time-display-item">
                            <strong>23</strong>
                            <p>Hours</p>
                        </div>
                        <div className="ad-time-display-item">
                            <strong>59</strong>
                            <p>Minuts</p>
                        </div>
                        <div className="ad-time-display-item">
                            <strong>35</strong>
                            <p>Second</p>
                        </div>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
                <img src="https://static.vecteezy.com/system/resources/previews/023/820/287/large_2x/fresh-fruits-with-water-splash-isolated-on-black-background-generative-ai-photo.jpg" alt="" />
            </div>
        </div>
    )
}

export default AdCard;