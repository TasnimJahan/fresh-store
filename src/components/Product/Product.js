import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
   
    return (
        <div className="productDiv" style={{marginBottom:'4%'}}>  
            <div style={{ height:'90%'}} className="col">
                <div style={{boxShadow:'10px 10px 20px grey', borderRadius:'10px',height:'25rem'}} className="card">
                    <img style={{ height:'55%',borderRadius:'10px',marginTop:'3%'}} src={product.imageUrl} alt=""/>
                    <div style={{flex:'none'}}className="card-body">
                        <h5 className="card-title">{product.name}-{product.weight} </h5>
                    </div>
                    <div className="card-footer" style={{backgroundColor:'#FFFFFF',height:'15%'}}>
                        <p className="text-muted" style={{display: 'flex',justifyContent: 'space-between'}}> <span><h5>{product.price}</h5></span> <span><p><Link to={`/checkOut/${product._id}`}><button className="btn btn-success"> <small>Buy Now</small> </button></Link></p></span>
                        </p>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Product;