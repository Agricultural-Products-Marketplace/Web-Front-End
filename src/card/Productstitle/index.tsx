import React from "react";
import './index.css';

interface ProductTitleCardProps {
    slog: string;
    title: string;
}

function ProductTitleCard({ slog, title }: ProductTitleCardProps) {
    return(
        <div className="product-title">
            <div className="top-slog">
                
                <p className="slog"><hr />{slog}</p>
            </div>
            <div className="main-title">
                <p className="title">{title}</p>
                {/* <div className="title-slider-icons">
                    <a href="#"><i className="fa fa-arrow-left"></i></a>
                    <a href="#"><i className="fa fa-arrow-right"></i></a>
                </div> */}
            </div>
        </div>
    );
}


export default ProductTitleCard;