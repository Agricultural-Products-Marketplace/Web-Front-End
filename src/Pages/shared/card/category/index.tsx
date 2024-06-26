import React, { useEffect, useState } from 'react';
import './index.css';
import { getAllCategories } from '../../../../services/category/getCategory';
import LoadingCard from '../Loadings/loadingCard';
import { Category } from '../../../../model/category';

interface CategoryCardProps {
    activeCategory: string | null;
    onCategoryClick: (categoryTitle: string) => void;
}

function CategoryCard({ activeCategory, onCategoryClick }: CategoryCardProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories([{ title: 'All' ,id:0,image:'',active:true,slug:''}, ...categoriesData]); // Add 'All' category option
        };
        fetchData();
    }, []);

    return (
        <section className="category">
            <div className="Category_title">
                <h2>Category</h2>
            </div>
            {
                (categories.length === 0)?(
                    <div className="category_list" style={{display:'flex',flexDirection:'column',gap:'1vw',alignItems:'center', paddingTop:'1.5vw'}}>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>
                            <LoadingCard width={'90%'} height={'3vw'} borderRadius='5px'/>

                    </div>
                ):(
                    <div className="category_list">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => onCategoryClick(category.title)}
                        className={activeCategory === category.title ? 'active_category' : ''}
                    >
                        <p>{category.title}</p>
                    </button>
                ))}
            </div>
                )
            }
        </section>
    );
}

export default CategoryCard;
