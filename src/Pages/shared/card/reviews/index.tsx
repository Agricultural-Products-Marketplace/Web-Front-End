import './index.css';

interface ProductReviewsProps{
    user:string;
    image:string;
    message:string;
    date:string
}

function ProductReviews({user,image,message,date}:ProductReviewsProps) {
    return(
        <div className="product-reviews-card">
            <div className="product-review-user">
                <img src={image} alt="" />
                <p>{user}</p>
            </div>
            <div className="product-review-message">
                <p>{message}</p>
                <p style={{fontSize:"12px",marginTop:"0px"}}>{date}</p>
            </div>
            <div className="product-review-message-actions">
                {/* <i className="fa-solid fa-edit"></i> */}
                <i className="fa-solid fa-trash" onClick={()=>{console.log("Icon Clicked")}}></i>
            </div>
        </div>
    )
}

export default ProductReviews;