import React from 'react';
import './index.css';

function CategoryCard() {
    const categorylist = ['Fruits','Category 2', 'Category 3', 'Category 4'];

    return (
        <section className="category">
            <div className="Category_title">
                <h2>Category</h2>
            </div>
            <div className="category_list">
                {categorylist.map((category, index) => (
                    <a href="#" key={index}>
                        <i className="fa-solid fa-check"></i>
                        <p>{category}</p>
                        <i className="fa-solid fa-angles-right"></i>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default CategoryCard;
