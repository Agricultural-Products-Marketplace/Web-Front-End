import AdminTopCard from "../../../card/admin/adminTopCard";
import './index.css';

function Products() {
    return(
        <div className="admin-page-main">
            <AdminTopCard title="Products"/>
            <div className="admin-page-main-products">
                <div className="admin-page-main-products-title">
                    <h3>Product List</h3>
                    <div className="admin-page-main-products-title-actions">
                        <div className="admin-page-main-products-title-actions-search">
                            <input type="text" />
                        </div>
                        <button>Add Product</button>
                        <button>More <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Products;