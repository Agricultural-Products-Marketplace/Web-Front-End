import React, { useState, useEffect } from 'react';
import './index.css';

function SliderCard() {
    const images = [
        "https://imgscf.slidemembers.com/docs/1/1/603/fresh_fruits_presentations_ppt_602687.jpg",
        "https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870264.jpg",
        "https://img.pikbest.com/backgrounds/20190430/simple-natural-agricultural-products-display-board-background_1891184.jpg!sw800",
        "https://png.pngtree.com/background/20211215/original/pngtree-agricultural-production-summer-solstice-farmer-rice-field-planting-photography-map-with-picture-image_1500018.jpg",
        "https://img.freepik.com/free-photo/agriculture-iot-with-rice-field-background_53876-124635.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <section className="slider">
            <div className="slider-container" style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className="slide" key={index}>
                        <img src={src} alt={`Slide ${index}`} />

                    </div>
                ))}
            </div>
        </section>
    );
}

export default SliderCard;
