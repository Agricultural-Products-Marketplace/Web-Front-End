import React from "react";
import './index.css';
import exp from "constants";
import ProductTitleCard from "../Productstitle";
import Product from "../product";


function ProductSlider(){

    const products = [
        {
            productName: "Rice",
            productPrice: 16,
            rating: 4,
            img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
            discount: 30
        },
        {
            productName: "Bokolo",
            productPrice: 250,
            rating: 5,
            img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
            discount: 5
        },
        {
            productName: "Ageda",
            productPrice: 36,
            rating: 3,
            img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
            discount: 2
        },
        {
            productName: "sinde",
            productPrice: 500,
            rating: 1,
            img: "https://sweetphi.com/wp-content/uploads/2019/03/How-to-make-an-instagram-worthy-fruit-bowl-2-683x1024.jpg",
            discount: 30
        }
        // Add more products as needed
    ];

    return(
        <div className="product-slider">
            <ProductTitleCard
            title="Flash Deals"
            slog="Today's"
            />
            <div className="slider-products">
                {products.map((product,index)=>(
                    <Product 
                    productName={product.productName}
                    productPrice={product.productPrice}
                    rating={product.rating}
                    img={product.img}
                    discount={product.discount}
                    />
                ))}
            </div>
            <div className="show-all">
                <button>View All Products</button>
            </div>
            <hr />
        </div>
    )
}

export default ProductSlider;
