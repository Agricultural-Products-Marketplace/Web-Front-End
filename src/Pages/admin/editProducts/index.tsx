import React, { useEffect, useState } from 'react';
import TopPath from '../../shared/commen/topPath';
import DropDown from '../../shared/card/dropdown';
import { getAllCategories } from '../../../services/category/getCategory';
import { Category } from '../../../model/category';
import { addProduct } from '../../../services/product/addProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../../../model/product';
import { getProductById } from '../../../services/product/getProducts';

interface EdiProductProps {
    productId: number;
}

const EdiProduct: React.FC<EdiProductProps> = ({ productId }) => {
    
    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            const product = await getProductById(productId);
            setCategories(categoriesData);
            if(product){
                setProductName(product.title);
                setCategory(product.category.title);
                setProductSlog(product.slug);
                setProductPrice(Number(product.price));
                setOldPrice(Number(product.old_price));
                setStatus(product.status);
                setShipmentPrice(Number(product.shipping_amount));
                setIsFeatured(product.featured);
                setDescription(product.description);
            }
        };
        fetchData();
    }, []);

    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const userId = useSelector((state: RootState) => state.user.profile?.id);
    const accessKey = useSelector((status: RootState) => status.login.user?.access);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(0);
    const [productPrice, setProductPrice] = useState<number>();
    const [oldPrice, setOldPrice] = useState<number>();
    const [shipmentPrice, setShipmentPrice] = useState<number>();
    const [inStock, setInStock] = useState<boolean>();
    const [isFeatured, setIsFeatured] = useState<boolean>();
    const [productName, setProductName] = useState<string>();
    const [productSlog, setProductSlog] = useState<string>('');
    const [category, setCategory] = useState<string>('Select category');
    const [status, setStatus] = useState<string>('');
    const [description, setDescription] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newQuantity = Number(event.target.value);
        if (newQuantity < 0) {
            newQuantity = 0;
        }
        setQuantity(newQuantity);
        setInStock(newQuantity > 0);
    };

    const handleProductPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPrice = Number(event.target.value);
        if (newPrice < 0) {
            newPrice = 0;
        }
        setProductPrice(newPrice);
    };

    const handleOldPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newOldPrice = Number(event.target.value);
        if (newOldPrice < 0) {
            newOldPrice = 0;
        }
        setOldPrice(newOldPrice);
    };

    const handleShipmentPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newShipmentPrice = Number(event.target.value);
        if (newShipmentPrice < 0) {
            newShipmentPrice = 0;
        }
        setShipmentPrice(newShipmentPrice);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!productName || !description || !productPrice || !category || !shipmentPrice || !quantity) {
            // If any required field is missing, show an error message or take appropriate action
            console.log("Please fill in all required fields");
            setIsLoading(false);
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields!',
                text: "All fields are required to create a product",
            });
            return;
        }

        try {
            // Create a FormData object
            const formData = new FormData();

            // Append product data
            formData.append('title', productName);
            formData.append('description', description);
            formData.append('price', String(productPrice));
            formData.append('shipping_amount', String(shipmentPrice));
            formData.append('stock_qty', String(quantity));
            formData.append('category', String(3));
            formData.append('in_stock', String(inStock));
            formData.append('status', status);
            formData.append('is_featured', String(isFeatured));
            formData.append('farmer', String(2));
            formData.append('slug', productSlog);

            const response = await addProduct(
                formData, Number(userId), String(accessKey)
            );

            Swal.fire({
                icon: 'success',
                title: 'Product Created Successfully',
                text: 'This product has been successfully created',
            });

            setIsLoading(false);

        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    return (
        <form className="add-product" onSubmit={handleSubmit}>
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-name">{} <sup>*</sup></label>
                    <input type="text" name="product-name" id="product-name" placeholder='Product Name' required
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="product-slog">Product Slog <sup>*</sup></label>
                    <input type="text" name="product-slog" id="product-slog" placeholder='Product Slog'
                        onChange={(e) => setProductSlog(e.target.value)}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="category">Category <sup>*</sup></label>
                    <DropDown items={categories.map(category => (
                        category.title
                    ))}
                        onSelectItem={setCategory}
                        selectedItem={category}
                    />
                </div>
            </div>

            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="product-price">Product Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="product-price"
                        id="product-price"
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={handleProductPriceChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="old-price">Product Old Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="old-price"
                        id="old-price"
                        placeholder='Old Price'
                        value={oldPrice}
                        onChange={handleOldPriceChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="status">Status <sup>*</sup></label>
                    <DropDown items={['draft', 'disabled', 'in_review', 'published']}
                        selectedItem={status}
                        onSelectItem={setStatus}
                    />
                </div>
            </div>
            <div className="add-product-items">
                <div className="add-product-item">
                    <label htmlFor="quantity">Quantity <sup>*</sup></label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        placeholder='Quantity'
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className="add-product-item">
                    <label htmlFor="shipment-price">Shipment Price <sup>*</sup></label>
                    <input
                        type="number"
                        name="shipment-price"
                        id="shipment-price"
                        placeholder='Shipment Price'
                        value={shipmentPrice}
                        onChange={handleShipmentPriceChange}
                    />
                </div>
                <div className="add-product-item product-check-box">
                    <div className="add-product-item-one">
                        <label htmlFor="in-stock">In Stock</label>
                        <input
                            type="checkbox"
                            name="in-stock"
                            id="in-stock"
                            checked={inStock}
                            readOnly
                        />
                    </div>
                    <div className="add-product-item-one">
                        <label htmlFor="featured">Featured</label>
                        <input type="checkbox" name="featured" id="featured"
                            checked={isFeatured}
                            onChange={() => setIsFeatured(!isFeatured)}
                        />
                    </div>
                </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="add-product-items add-product-items-description">
                <textarea name="description" id="description" placeholder='Your Description'
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="add-product-items">
                <button className='add-product-button' type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Product'}
                </button>
            </div>
        </form>
    );
}

export default EdiProduct;
