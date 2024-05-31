import React, { useState } from 'react';
import './index.css';

function AddProduct() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Category');

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className="add-product">
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">Product Name <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <div className="add-product-item-dropdown">
                        <div className="item-dropdown-title" onClick={toggleDropdown}>
                            <p>{selectedCategory}</p>
                            <i className={`fa-solid fa-caret-${isDropdownOpen ? 'up' : 'down'}`}></i>
                        </div>
                        {isDropdownOpen && (
                            <ul>
                                {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8'].map((category, index) => (
                                    <li key={index} onClick={() => handleCategorySelect(category)}>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-description">Product Price <sup>*</sup></label>
                    <input type="number" name="product-price" id="product-price" placeholder='Product Price'/>
                </div>
            </div>

            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">Product Slog <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <input type="text" />
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-description">Product Price <sup>*</sup></label>
                    <input type="number" name="product-price" id="product-price" placeholder='Product Price'/>
                </div>
            </div>

            <div className="add-product-items">
                <div className="add-product-items-image"></div>
                <div className="add-product-items-description">
                    <textarea name="" id=""></textarea>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
