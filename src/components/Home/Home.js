import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
useEffect(()=>{
    fetch('https://pumpkin-shortcake-83525.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setLoading(false);
    })
}, [])

console.log(products);


    return (
        <div style={{ backgroundColor:'chartreuse'}}>

     <form class="col-md-6 m-auto py-5">
        <div class="input-group mb-3">
          <span class="fa fa-search form-control-feedback"></span>
          <input
            id="foodName"
            type="text"
            class="form-control"
            placeholder="Search for Food..."
          />
          <div class="input-group-append">
            <button id="search" type="button" class="btn btn-primary">Search</button>
          </div>
        </div>
      </form> 


        <div style={{margin:'0 auto'}} className="row container row row-cols-1 row-cols-md-3 g-4" >
            {
                loading ? <p style={{textAlign:'center',margin:'0 auto', marginBottom:'2%'}}><CircularProgress color="secondary" /></p> : 
                products.map(product =><Product product={product} key={product._id}></Product>)
            }
        </div>
        </div>
    );
};

export default Home;