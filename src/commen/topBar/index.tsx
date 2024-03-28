import React, { useEffect } from 'react';
import './index.css';

declare global {
    interface Window {
        gtranslateSettings: any;
    }
}

const TopBar = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
        script.defer = true;
        document.body.appendChild(script);

        window.gtranslateSettings = {
            "default_language":"en",
            "detect_browser_language":true,
            "languages":["en","am","es","fr","ar"],
            "wrapper_selector":".gtranslate_wrapper",
            "float_switcher_open_direction":"left"
        };
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="top_bar" id='TopBar'>
            <p>Summer Sale For All Agricultural product And Free Express Delivery - OFF 50%! <a href=""><strong> Shop Now</strong></a></p>
            <div className="gtranslate_wrapper"></div>
            <div className="icons">
                <a href="#"><i className="fa-solid fa-user"></i><small>Profile</small></a>
                <a href="#"><i className="fa-solid fa-message"></i> <small>Message</small></a>
            </div>
        </div>
    );
}

export default TopBar;
