import { useSelector } from 'react-redux';
import './index.css';
import { RootState } from '../../../../redux/reducers/rootReducer';

interface ProductReviewsProps{
    user:string;
    image:string;
    message:string;
    date:Date
    reviewrId:number
}


function ProductReviews({user,image,message,date,reviewrId}:ProductReviewsProps) {
    const userID = useSelector((state:RootState)=>state.user.profile?.id);
    return(
        <div className="product-reviews-card">
            <div className="product-review-user">
                <img src={image} alt="" />
                <p>{user}</p>
            </div>
            <div className="product-review-message">
                <p>{message}</p>
                <p style={{fontSize:"12px",marginTop:"0px"}}>{String(date)}</p>
            </div>
            {
                (Number(userID) === reviewrId)?(
                    <div className="product-review-message-actions">
                {/* <i className="fa-solid fa-edit"></i> */}
                {/* <i className="fa-solid fa-trash" onClick={()=>{console.log("Icon Clicked")}}></i> */}
            </div>
                ):(null)
            }
            
        </div>
    )
}

export default ProductReviews;