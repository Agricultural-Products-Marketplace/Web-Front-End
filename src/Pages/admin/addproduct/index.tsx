import React, { useState } from 'react';
import './index.css';

function AddProduct() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Category");
    const [currentPage, setCurrentPage] = useState(1);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionClick = (option:string) => {
        setSelectedOption(option);
        setCurrentPage(1); // Reset to first page when changing category
        setIsDropdownOpen(false); // Close dropdown after selecting an option
    };

    return (
        <div className="popup">
            <div className="popup-content-product">
                <div className='heading-popup'>
                <h2>Basic Info</h2>
                <i className='fa-solid fa-close'></i>
                </div>
                <div className="add-product-content">
                    <div className="product-contents">
                        <p>Product Name <sup>*</sup></p>
                        <input type="text"  placeholder='Product Name'  />
                    </div>

                    <div className="product-contents">
                        <p>Product Category <sup>*</sup></p>
                        <div className={`add-product-dropdown dropdown ${isDropdownOpen ? "menu-open" : ""}`}>
                            <div className="select" onClick={toggleDropdown}>
                                <span className="selected">{selectedOption}</span>
                                <i className={`fa-solid ${isDropdownOpen ? "fa-caret-up" : "fa-caret-down"}`}></i>
                            </div>
                            {isDropdownOpen && (
                                <ul className="menu">
                                    <li className={selectedOption === "All Category" ? "active" : ""} onClick={() => handleOptionClick("All Category")}>All Category</li>
                                    <li className={selectedOption === "Fruits" ? "active" : ""} onClick={() => handleOptionClick("Fruit")}>Fruits</li>
                                    <li className={selectedOption === "Grains" ? "active" : ""} onClick={() => handleOptionClick("Grain")}>Grains</li>
                                    <li className={selectedOption === "Oilseeds" ? "active" : ""} onClick={() => handleOptionClick("Oilseed")}>Oilseeds</li>
                                    <li className={selectedOption === "Pulse" ? "active" : ""} onClick={() => handleOptionClick("Pulse")}>Pluses</li>
                                    <li className={selectedOption === "Vegetables" ? "active" : ""} onClick={() => handleOptionClick("Vegetable")}>Vegetables</li>
                                    <li className={selectedOption === "Fiber crops" ? "active" : ""} onClick={() => handleOptionClick("Fiber crop")}>Fiber crops</li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="product-contents">
                        <p>Product Price <sup>*</sup></p>
                        <input type="number"  placeholder='Price' />
                    </div>
                </div>

                <h2>More Detail</h2>
                <div className="add-product-content">
                    <div className="product-contents">
                        <p>Product Description</p>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div className="product-contents">
                        <p>Product Quantity</p>
                        <input type="number" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
