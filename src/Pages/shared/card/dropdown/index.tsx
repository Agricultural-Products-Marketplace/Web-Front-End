import { useState } from "react";

interface DropDownProps {
    items: string[];
}

function DropDown({ items }: DropDownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('Select item');

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
    };

    return (
        <div className="add-product-item-dropdown">
            <div className="item-dropdown-title" onClick={toggleDropdown}>
                <p>{selectedCategory}</p>
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
