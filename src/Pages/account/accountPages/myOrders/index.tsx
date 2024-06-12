import AdminTopCard from '../../../shared/card/admin/adminTopCard';
import './index.css';

function MyOrders() {
    const ordersData = [
        { id: 1, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Banana', qty: '2', date: 'Feb 5, 2020', price: '253.82', profit: '60.76', status: 'Abel' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Apple', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Tadesse' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Apple', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Yosef' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Apple', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Chala' },
        // Add more data as needed
    ];
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
                        {ordersData.map((order)=>(
                            <tr key={order.id}>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src={order.image} alt="" />
                                    <p>{order.name}</p>
                                </div>
                            </td>
                            <td className='flex-1'>{order.price}</td>
                            <td className='flex-1'>X{order.qty}</td>
                            <td className='flex-1'>{Number(order.price) * Number(order.qty)}</td>
                            <td className='flex-1'>{order.date}</td>
                            <td className='flex-1'>{order.status}</td>
                            <td className='flex-1'>
                                    <button><i className='fa-solid'>Cancel</i></button>


                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

        </div>
    );
};

export default MyOrders;