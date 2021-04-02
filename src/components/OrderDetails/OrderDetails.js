import React from 'react';
import './OrderDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


const OrderDetails = (props) => {
    const {productName,buyer,email,date,orderId} = props;
    return (
        <div className="orderDetailsDiv">
            <h6>Order Id: {orderId}</h6>
            <h6>PRODUCT: {productName}</h6>
            <h6>Quantity: 1</h6>
            <h6>Date: {date}</h6>        
            <h6>Status: In Progress</h6>
            <p>Name: {buyer}</p>
            <p>Email: {email}</p>
            <div style={{width:'100%'}} className="btn btn-primary">Proceed to payment<FontAwesomeIcon style={{ fontSize: '1.3rem', marginLeft:'4px' }} icon={faHandPointRight} /></div>
        </div>
    );
};

export default OrderDetails;