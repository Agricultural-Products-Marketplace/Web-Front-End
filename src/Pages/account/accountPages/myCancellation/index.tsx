function MyCancellation() {
    const ordersData = [
        { id: 1, image:'https://images.immediate.co.uk/production/volatile/sites/30/2017/07/pineapple-6ee23f3.jpg?quality=90&resize=556,505',name: 'Pine Apple', qty: '2', date: 'Feb 5, 2020', price: '253.82', profit: '60.76', status: 'Abel' },
        { id: 2, image:'https://img.freepik.com/premium-vector/cup-coffee-vector-illustration_906149-1935.jpg',name: 'Mango', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Tadesse' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Tef', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Yosef' },
        { id: 2, image:'https://thumbs.dreamstime.com/b/coffee-cup-beans-26448276.jpg',name: 'Coffe', qty: '3', date: 'Feb 6, 2020', price: '350.25', profit: '80.30', status: 'Chala' },
        // Add more data as needed
    ];
    return(
        <div className="admin-page-main" style={{backgroundColor:"white"}}>
                <table className="admin-page-main-products-table" >
                    <thead>
                        <tr>
                            <th className='flex-3' style={{color:"Red"}}>Cancellation</th>
                            <th className='flex-1' style={{color:"Red"}}>Price</th>
                            <th className='flex-1' style={{color:"Red"}}>Quantity</th>
                            <th className='flex-1' style={{color:"Red"}}>Total</th>
                            <th className='flex-1' style={{color:"Red"}}>Date</th>
                            <th className='flex-1'style={{color:"Red"}}>Seller</th>
                            <th className='flex-1'style={{color:"Red"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order)=>(
                            <tr key={order.id}>
                            <td className='flex-3'>
                                <div className='row'>
                                    <img src={order.image} alt="" />
                                    <p style={{color:"red"}}>{order.name}</p>
                                </div>
                            </td>
                            <td className='flex-1' style={{color:"red"}}>{order.price}</td>
                            <td className='flex-1' style={{color:"red"}}>X{order.qty}</td>
                            <td className='flex-1' style={{color:"red"}}>{Number(order.price) * Number(order.qty)}</td>
                            <td className='flex-1' style={{color:"red"}}>{order.date}</td>
                            <td className='flex-1' style={{color:"red"}}>{order.status}</td>
                            <td className='flex-1'>
                                    <button><i>Order</i></button>


                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

        </div>
    );
};

export default MyCancellation;