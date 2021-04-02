import React from 'react';
import './OrderDetails.css'

const OrderDetails = (props) => {
    console.log(props);
    const {productName,buyer,email,date} = props;
    return (
        <div className="orderDetailsDiv">
            <h1>Details</h1>
            <h3>Product:{productName}</h3>
            <p>Date:{date}</p>
            <h5>Name:{buyer}</h5>
            <p>From this mail:{email}</p>
            <div style={{width:'100%'}} className="btn btn-primary">Added to cart</div>
        </div>
    );
};

export default OrderDetails;