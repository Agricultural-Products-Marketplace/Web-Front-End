import { useState, useEffect } from 'react';
import CategoryCard from '../shared/card/category';
import './index.css';
import { ProductData, getAllProducts } from '../../services/product/getProducts';

function Category() {

    const [products, setProducts] = useState<ProductData[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>('All');


    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getAllProducts();
            setProducts(productsData);
            setFilteredProducts(productsData); // Initialize with all products
        };
        fetchData();
    }, []);

    const handleCategoryClick = (categoryTitle: string) => {
        setActiveCategory(categoryTitle);
        if (categoryTitle === 'All') {
            setFilteredProducts(products); // Show all products if 'All' is selected
        } else {
            setFilteredProducts(products.filter(product => product.category.title === categoryTitle));
        }
    };

    // Local list variable


    return(
        <div className="category-page">
            <CategoryCard activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
            
            <div className="category-page-items">
                {filteredProducts.map((product, index) => (
                    <a key={index} href={`/product-detail?id=${product.id}`} className="category-page-item">
                        <div className='category-page-item-overlay'>
                            <div className="overlay-top">
                                <p>{product.old_price}%</p>
                                <div className="category-page-items-icon">
                                    <button onClick={()=>{}}><i className="fa-solid fa-heart"></i></button>
                                </div>
                            </div>
                            <div className="overly-bottom">
                                <button>Add To Cart</button>
                            </div>
                        </div>
                        <img src={product.image} alt={product.title} />
                        <div className="category-item-description">
                            <div className="category-page-item-dis">
                                <small>{product.category.title}</small>
                                <h3>{product.title}</h3>
                                <div className="rating">
                                    {[...Array(product.rating)].map((_, i) => (
                                        <i key={i} className="fa fa-star"></i>
                                    ))}
                                    {[...Array(5 - product.rating)].map((_, i) => (
                                        <i key={i + product.rating} className="fa-regular fa-star"></i>
                                    ))}
                                </div>
                            </div>
                            <div className="category-dis-bottom">
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </a>
                ))}
                
            </div>
        </div>
    );
}

export default Category;
