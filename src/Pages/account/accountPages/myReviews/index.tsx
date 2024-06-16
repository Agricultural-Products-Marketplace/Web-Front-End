import { useEffect, useState } from "react";
import { ReviewModel } from "../../../../model/productReviewModel";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { fetchAllProductReview } from "../../../../services/product-review/get-product-Review";

function MyReviews() {



    const [myreviews, setMyReviews] = useState<ReviewModel[]>([]);
    const userId = useSelector((state:RootState)=>state.user.profile?.id);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('id');
        

        if(userId) {
            fetchProductReview();
            
        }
    }, []);

    const fetchProductReview= async () => {
        try {
            const reviewData = await fetchAllProductReview();
            const filteredProducts = reviewData.data.filter(review => Number(review.user.id) === Number(userId));
            setMyReviews(filteredProducts);
            
            
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
    return(
        <div className="admin-page-main" style={{backgroundColor:"white"}}>
                <table className="admin-page-main-products-table" >
                    <thead>
                        <tr>
                            <th className='flex-2' >Reviewd Product</th>
                            <th className='flex-1' >Ratting</th>
                            <th className='flex-3' >Messge</th>
                            <th className='flex-1'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myreviews.map((review)=>(
                            <tr key={review.id}>
                            <td className='flex-2'>
                                <div className='row'>
                                    <img src={review.product.image} alt="" />
                                    <p >{review.product.title}</p>
                                </div>
                            </td>
                            <td className='flex-1' >
                            <div className="product-detail-rating-icons">
                                {[...Array(Number(review.rating))].map((_, index) => (
                                    <i key={index} className="fa fa-star"></i>
                                ))}
                                {[...Array(5 - Number(review.rating))].map((_, index) => (
                                    <i key={index + Number(review.rating)} className="fa-regular fa-star"></i>
                                ))}
                            </div>
                            </td>
                            <td className='flex-3' >{review.review}</td>
                            {/* <td className='flex-1'>
                                    <button><i>Order</i></button>


                            </td> */}
                        </tr>
                        ))}
                    </tbody>
                </table>

        </div>
    );
};

export default MyReviews;