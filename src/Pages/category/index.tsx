import { useState, useEffect } from 'react';
import CategoryCard from '../shared/card/category';
import './index.css';
import { ProductData, getAllProducts } from '../../services/product/getProducts';
import LoadingCard from '../shared/card/Loadings/loadingCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { AppDispatch } from '../../redux/store';
import { addWishlists } from '../../services/wishlist/getwishlist';

function Category() {
    const dispatch: AppDispatch = useDispatch();

    const [products, setProducts] = useState<ProductData[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([]);
    const [activeCategory, setActiveCategory] = useState<string | null>('All');
    const user = useSelector((state:RootState)=> state.user.profile);
    const userId:number = user?.id ? user.id : 0;
    const accessKey = useSelector((state:RootState)=> state.login.user?.access);
    

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
            
            {(filteredProducts.length === 0)?(
                <div className="category-page-items">
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                    <LoadingCard width={'18vw'} height={'22vw'} borderRadius='5px'/>
                </div>
            ):(
                <div className="category-page-items">
                {filteredProducts.map((product, index) => (
                    <Link key={index} to={`/product-detail?id=${product.id}`} className="category-page-item">
                        <div className='category-page-item-overlay'>
                            <div className="overlay-top">
                                <p>{product.old_price}%</p>
                                <div className="category-page-items-icon">
                                    {}
                                    <button onClick={()=>{addWishlists(userId,product.id,String(accessKey))}}><i className="fa-solid fa-heart"></i></button>
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
                    </Link>
                ))}
                
            </div>
            )}
        </div>
    );
}

export default Category;
