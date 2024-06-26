import React, { useEffect } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

declare global {
    interface Window {
        gtranslateSettings: any;
    }
}

const TopBar = () => {
    const location = useLocation();
    const { pathname } = location;
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
        pathname === '/admin'|| pathname === '/signup/agent' || pathname === '/signup/customer'|| pathname === '/signUp'|| pathname === '/signUp/' ||pathname === '/signin' ||pathname === '/success' ?null:<div className="top_bar" id='TopBar'>
        <p>Summer Sale For All Agricultural product And Free Express Delivery - OFF 50%! <Link to={'/category'}><strong> Shop Now</strong></Link></p>
        <div className="gtranslate_wrapper"></div>
        <div className="icons">
            <a href="#"><i className="fa-solid fa-phone"></i><small>+251 91 297 8713</small></a>
            <a href="#"><i className="fa-solid fa-message"></i> <small>agmp.ino@gmail.com</small></a>
        </div>
    </div>
    );
}

export default TopBar;
