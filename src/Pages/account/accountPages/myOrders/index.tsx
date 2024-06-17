import { ProductModel } from '../../../../model/product';
import AdminTopCard from '../../../shared/card/admin/adminTopCard';
import './index.css';

function MyOrders() {
    const ordersData:ProductModel[] = [];
    return(
        <div className="admin-page-main" style={{backgroundColor:"white"}}>
                <table className="admin-page-main-products-table" >
                    <thead>
                        <tr>
                            <th className='flex-3'>Orders</th>
                            <th className='flex-1'>Price</th>
                            <th className='flex-1'>Quantity</th>
                            <th className='flex-1'>Total</th>
                            <th className='flex-1'>Date</th>
                            <th className='flex-1'>Seller</th>
                            <th className='flex-1'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (ordersData.length > 0)?(ordersData.map((order)=>(
                                <tr key={order.id}>
                                <td className='flex-3'>
                                    <div className='row'>
                                        <img src={order.image} alt="" />
                                        <p>{order.title}</p>
                                    </div>
                                </td>
                                <td className='flex-1'>{order.price}</td>
                                <td className='flex-1'>X{order.stock_qty}</td>
                                <td className='flex-1'>{Number(order.price) * Number(order.stock_qty)}</td>
                                <td className='flex-1'>{String(ordersData)}</td>
                                <td className='flex-1'>{order.status}</td>
                                <td className='flex-1'>
                                        <button><i className='fa-solid'>Cancel</i></button>
    
    
                                </td>
                            </tr>
                            ))):(<h1>No Avilabel Orders</h1>)
                        }
                    </tbody>
                </table>

        </div>
    );
};

export default MyOrders;