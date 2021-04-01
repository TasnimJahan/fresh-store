import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    console.log(orders);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://pumpkin-shortcake-83525.herokuapp.com/orders/?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div>
            <h1>Order page</h1>
            <h3>You have : {orders.length} Orders</h3>
            {
                orders.map(order => <li key={order._id}>{order.productName} bought by {order.name} from: {(new Date(order.checkIn).toDateString('dd/MM/yyyy'))} to:  {(new Date(order.checkOut).toDateString('dd/MM/yyyy'))} from this mail={order.email}</li>)
            }
        </div>
    );
};

export default Orders;