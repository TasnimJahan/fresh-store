import React from 'react';
import './OrderDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


const OrderDetails = (props) => {
    console.log(props);
    const {productName,buyer,email,date} = props;
    return (
        <div className="orderDetailsDiv">
            <h5>Product Name:{productName}</h5>
            <h5>Quantity:1</h5>
            <h5>Date:{date}</h5>        
            <h6>Status: In Progress</h6>
            <h6>Name:{buyer}</h6>
            <p>Email:{email}</p>
            <div style={{width:'100%'}} className="btn btn-primary">Proceed to payment<FontAwesomeIcon style={{ fontSize: '1.3rem', marginLeft:'4px' }} icon={faHandPointRight} /></div>
        </div>
    );
};

export default OrderDetails;