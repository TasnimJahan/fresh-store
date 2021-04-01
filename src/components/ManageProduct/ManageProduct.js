import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    console.log(products);
    
    
    return (
        <div>
            <h1>Manage product</h1>
           <div>
               <table className="table table-striped table-hover">
                   <tr>
                       <th scope="row">Product Name</th>
                       <th scope="row">Price</th>
                       <th scope="row">Delete</th>
                   </tr>
                  
                {
                   products.map(product =><DeleteProduct product={product} key={product._id}></DeleteProduct>)
                } 

               </table>
               
               {/* {
                   products.map(product =><DeleteProduct product={product} key={product._id}></DeleteProduct>)
               } */}
           </div>
           </div>
    );
};

export default ManageProduct;