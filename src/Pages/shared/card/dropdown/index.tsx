import React, { useState } from "react";

interface DropDownProps {
    items: string[];
    selectedItem: string;
    onSelectItem: (item: string) => void;
}

function DropDown({ items, selectedItem, onSelectItem }: DropDownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleCategorySelect = (category: string) => {
        onSelectItem(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className="add-product-item-dropdown">
            <div className="item-dropdown-title" onClick={toggleDropdown}>
                <p>{selectedItem}</p>
                <i className={`fa-solid fa-caret-${isDropdownOpen ? 'up' : 'down'}`}></i>
            </div>
            {isDropdownOpen && (
                <ul>
                    {items.map((category, index) => (
                        <li key={index} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropDown;
