import { SetStateAction, useEffect, useState } from 'react';
import DropDown from '../shared/card/dropdown';
import './index.css';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ProductModel } from '../../model/product';
import { RootState } from '../../redux/reducers/rootReducer';
import { getAllProducts } from '../../services/product/getProducts';
import { CartModel } from '../../model/cart';
import { addWishlists } from '../../services/wishlist/getwishlist';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/wishlistAction';
import { addCart } from '../../services/cart/addnewcart';
import { addToCart } from '../../redux/actions/cartAction';
import { Category } from '../../model/category';
import { getAllCategories } from '../../services/category/getCategory';
import { getAllFarmers, getFarmersById, getfarmersProps } from '../../services/farmer/getfarmers';
import LoadingCard from '../shared/card/Loadings/loadingCard';

function FilterProducts() {
    const [status, setStatus] = useState<string>('Status');
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<string>('Select category');
    const [farmerName, setFarmerName] = useState<string>('All Farmers');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [products, setProducts] = useState<ProductModel[]>([]);
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 15;

    const minPriceOptions = [0, 10, 50, 100, 200, 500];
    const maxPriceOptions = [100, 200, 500, 1000, 2000, 5000];
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(5000);
    const [farmers,setFarmers] = useState<getfarmersProps[]>([]);

    const dispatch: AppDispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
    const user = useSelector((state: RootState) => state.user.profile);
    const userId: number = user?.id ? user.id : 0;
    const accessKey = useSelector((state: RootState) => state.login.user?.access);
    const wishlist = useSelector((state: RootState) => state.wishlist.items);
    const cart = useSelector((state: RootState) => state.cart.cart);
    const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const productsData = await getAllProducts();
            const categoriesData = await getAllCategories();
            const farmersData = await getAllFarmers();
            setProducts(productsData);
            setFilteredProducts(productsData);
            setCategories(categoriesData);
            setFarmers(farmersData);
            
        };
        fetchData();
    }, []);

    useEffect(() => {
        filterProducts();
    }, [status, category, farmerName, minPrice, maxPrice, searchTerm, currentPage]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleMinPriceChange = (value: string) => {
        setMinPrice(Number(value));
    };

    const handleMaxPriceChange = (value: string) => {
        setMaxPrice(Number(value));
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filterProducts = () => {
        let filtered = products;

        if (status !== 'Status') {
            filtered = filtered.filter(product => product.status === status);
        }

        if (category !== 'Select category') {
            filtered = filtered.filter(product => product.category.title === category);
        }

        if (farmerName !== 'All Farmers') {
            filtered = filtered.filter(product => product.farmer.name === farmerName);
        }

        filtered = filtered.filter(product => Number(product.price) >= minPrice && Number(product.price) <= maxPrice);

        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                product.slug.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    const handleNextPage = () => {
        if (currentPage * itemsPerPage < filteredProducts.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    function includes<ProductModel>(array: ProductModel[], value: ProductModel): boolean {
        return array.some(item => item === value);
    }

    function includescart<ProductModel>(array: CartModel[], value: number): boolean {
        return array.some(item => Number(item.product.id) === Number(value));
    }

    return (
        <div className="filter-products-page">
            <div className="filter-products-right-nav">
                <h1>Filter Products By</h1>
                <DropDown items={['Select category', ...categories.map(category => (
                    category.title
                ))]}
                    selectedItem={category}
                    onSelectItem={setCategory} />
                <DropDown items={['Status', 'draft', 'disabled', 'in_review', 'published']}
                    selectedItem={status}
                    onSelectItem={setStatus} />
                <DropDown items={['All Farmers',...farmers.map(farmer => farmer.name) ]}
                    selectedItem={farmerName}
                    onSelectItem={setFarmerName} />
                <div>
                    Min Price
                <DropDown items={minPriceOptions.map(price => price.toString())}
                    selectedItem={minPrice.toString()}
                    onSelectItem={handleMinPriceChange} />
                </div>
                <div>
                    Max Price
                <DropDown items={maxPriceOptions.map(price => price.toString())}
                    selectedItem={maxPrice.toString()}
                    onSelectItem={handleMaxPriceChange} />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by name or slug" 
                    value={searchTerm} 
                    onChange={handleSearchTermChange} 
                />
            </div>
            <div className='filter-products-left-nav'>
                {isLoading?(
                    <div className="filter-products-left-nav-products">
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                        <LoadingCard width={'100%'} height={'370px'} borderRadius='5px' />
                    </div>
                ):(
                    currentProducts.length === 0?(
                        <div className="filter-products-left-nav-products">
                            <h1>No Products</h1>
                        </div>
                    ):(
                        <div className="filter-products-left-nav-products">
                {currentProducts.map((product, index) => (
                    <div key={index} className="category-page-item">
                        <div className='category-page-item-overlay'>
                            <div className="overlay-top">
                                <p>{product.old_price}%</p>
                                <div className="category-page-items-icon">
                                    {
                                        (isAuthenticated && !includes(wishlist, product) ? (<button onClick={async () => {
                                            const response = await addWishlists(userId, product.id, String(accessKey));
                                            dispatch(addToWishlist(product));
                                        }}><i className="fa-regular fa-heart"></i></button>) : (
                                            (isAuthenticated && includes(wishlist, product)) ? (<button onClick={async () => {
                                                const response = await addWishlists(userId, product.id, String(accessKey));
                                                dispatch(removeFromWishlist(product.id))
                                            }}><i className="fa-solid fa-heart" style={{ color: "gold" }}></i></button>) : (null)
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="overly-bottom">
                                {
                                    (isAuthenticated && !includescart(cart, product.id)) ? (<button onClick={async () => {
                                        const response = await addCart(product.id, userId, Number(product.price), "Ethiopia", `${user?.id}_cart`, String(accessKey));
                                        if (response === 201) {
                                            dispatch(addToCart({ product }));
                                        }
                                    }}> Add To Cart</button>) : (null)
                                }
                            </div>
                        </div>
                        <img src={product.image} alt={product.title} />
                        <Link to={`/product-detail?id=${product.id}`} className="category-item-description">
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
                        </Link>
                    </div>
                ))}
                </div>
                    )
                )}
                {
                    (products.length > 15)?(<div className="pagination-controls-bottom">
                    
                        <button onClick={handlePreviousPage} disabled={currentPage === 1}> <i className="fa-solid fa-arrow-left"> </i> Previous</button>
                        <button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= filteredProducts.length}>Next <i className="fa-solid fa-arrow-right"></i></button>
                    </div>):(null)
                }
                
            </div>
        </div>
    );
}

export default FilterProducts;
