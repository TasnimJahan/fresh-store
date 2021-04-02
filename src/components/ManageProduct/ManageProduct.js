import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://pumpkin-shortcake-83525.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Manage product</h1>
           <div style={{width:'90%'}}>
               <table className="table table-striped table-hover">
                   <tr>
                       <th scope="row">Product Name</th>
                       <th scope="row">Weight</th>
                       <th scope="row">Price</th>
                       <th scope="row">Delete</th>
                   </tr>
                  
                {
                   products.map(product =><DeleteProduct product={product} key={product._id}></DeleteProduct>)
                } 

               </table>
           </div>
           </div>
    );
};

export default ManageProduct;