import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Order.css'

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
        <div className="container">
            <h3>You have total: {orders.length} Orders</h3>
            <div className="detailOrder">
                {
                    orders.map(order => <OrderDetails key={order._id} productName={order.productName} date= {(new Date(order.checkIn).toDateString('dd/MM/yyyy'))} buyer={order.name} email={order.email}></OrderDetails>)
                }
            </div>
        </div>
    );
};

export default Orders;