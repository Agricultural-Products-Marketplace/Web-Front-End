import React, { useState } from 'react';
import './index.css';
import TopPath from '../shared/commen/topPath';
import DropDown from '../shared/card/dropdown';

interface Image {
    id: number;
    url: string;
}

function AddProduct() {
    const [images, setImages] = useState<Image[]>([]);
    const [imageIdCounter, setImageIdCounter] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            if (images.length + files.length > 10) {
                setError("You can only upload a maximum of 10 images.");
                return;
            }
            setError(null);
            const newImages = files.map((file, index) => ({
                id: imageIdCounter + index + 1,
                url: URL.createObjectURL(file)
            }));
            setImageIdCounter(prevCounter => prevCounter + files.length);
            setImages(prevImages => [...prevImages, ...newImages]);
        }
    };

    const handleImageDelete = (id: number) => {
        setImages(images.filter(image => image.id !== id));
    };

    return (
        <div className="add-product">
            <TopPath mainpath='Add Product' prepath='Home / ' />
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">Product Name <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <DropDown items={['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8']}/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-price">Product Price <sup>*</sup></label>
                    <input type="number" name="product-price" id="product-price" placeholder='Product Price'/>
                </div>
            </div>

            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-slog">Product Slog <sup>*</sup></label>
                    <input type="text" name="product-slog" id="product-slog" placeholder='Product Slog'/>
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <input type="text" />
                </div>
                <div className="add-product-item">
                    <label htmlFor="quantity">Quantity <sup>*</sup></label>
                    <input type="number" name="quantity" id="quantity" placeholder='Quantity'/>
                </div>
            </div>

            {error && <p className="error-message">{error}</p>}
            <div className="add-product-items add-product-items-img">
                <div className="add-product-items-image">
                    <div className="add-product-item-add-image">
                        <label htmlFor="image-upload">
                            <i className="fa-solid fa-file-import"></i>
                        </label>
                        <input 
                            type="file" 
                            id="image-upload" 
                            accept="image/*" 
                            multiple 
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                    
                    <div className="image-preview">
                    {images.map((image) => (
                        <div key={image.id} className="uploaded-image-container">
                            <img src={image.url} alt={`Upload ${image.id}`} className="uploaded-image" />
                            <button onClick={() => handleImageDelete(image.id)} className="delete-button">×</button>
                        </div>
                    ))}
                </div>
                </div>
                
                <div className="add-product-items-description">
                    <textarea name="description" id="description" placeholder='Your Description'></textarea>
                </div>
            </div>
            <div className="add-product-items">
                <button className='add-product-button'>Add Product</button>
            </div>
        </div>
    );
}

export default AddProduct;
