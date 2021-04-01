import React from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css'
const CheckOut = () => {
    return (
        <div>
            <h1 style={{margin:'0 auto',width:'80%'}}>CheckOut div</h1>
            <table className="table table-striped table-hover checkOutTable">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sf</td>
                        <td>sf</td>
                        <td>sf</td>
                    </tr>
                </tbody>
            </table>
           <Link to="/orders"><button class="btn btn-primary checkOutBtn">CheckOut</button></Link>
        </div>
    );
};

export default CheckOut;