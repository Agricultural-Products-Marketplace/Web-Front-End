import React from 'react';
import './index.css';

function TopBar() {
    return(
        <div className="top_bar">
            <p>Summer Sale For All Agricultural product And Free Express Delivery - OFF 50%! <a href=""><strong> Shop Now</strong></a></p>
            <select name="language" id="">
                <option value="English">English</option>
                <option value="Amharic">Amharic</option>
            </select>
            <div className="icons">
            <a href="#"><i className="fa-solid fa-user"></i><small>Profile</small></a>
            <a href="#"><i className="fa-solid fa-message"></i> <small>Message</small></a>
            </div>
        </div>
    );
}

export default TopBar;