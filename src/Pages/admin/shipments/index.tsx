import AddProduct from "../../addProduct";
import AdminTopCard from "../../shared/card/admin/adminTopCard";

function Shipments() {
    return(
        <div className="admin-page-main">
            <AdminTopCard title="Add Products"/>
            <AddProduct />
        </div>
    )
}

export default Shipments;