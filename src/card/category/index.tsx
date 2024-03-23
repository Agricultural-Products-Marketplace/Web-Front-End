import React from 'react';
import './index.css';

function CategoryCard() {
    return(
        <section className="category">
            <div className="Category_title">
                <h2>Category</h2>
            </div>
            <div className="category_list">
                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 1</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 2</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 3</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 4</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 5</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

                <a href="#">
                    <i className="fa-solid fa-check"></i>
                    <p>Category 6</p>
                    <i className="fa-solid fa-angles-right"></i>
                </a>

            </div>
        </section>
    );
}

export default CategoryCard;