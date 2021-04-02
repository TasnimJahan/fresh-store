import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CheckOut.css'
const CheckOut = () => {
    const {id} = useParams();
    console.log(id);
    const [product,setProduct]=useState({})
    useEffect(() => {
        fetch(`https://pumpkin-shortcake-83525.herokuapp.com/products/${id}`)
        .then((response) =>response.json())
        .then(data => {
            console.log(data[0])
            setProduct(data[0]);
        })
    },[])
    console.log(product);
    return (
        <div>
            <h1>Check Out</h1>
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
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
           <Link to="/orders"><button class="btn btn-primary checkOutBtn">CheckOut</button></Link>
        </div>
    );
};

export default CheckOut;