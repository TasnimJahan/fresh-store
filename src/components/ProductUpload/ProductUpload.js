import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios').default;
import './ProductUpload.css'

const ProductUpload = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] =useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageUrl: imageUrl
        }
        const url = `https://pumpkin-shortcake-83525.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(response => console.log("server side response", response))
    };
    
    const handleImageUpload = (event) => {
        console.log(event.target.files);
        console.log(event.target.files[0]);
        const apiKey='ab8a0a3270789799c6a5a7b39fbf54c4'
        const imageData = new FormData();
        imageData.set('key',apiKey);
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response);
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div className="productUploadDiv">          
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Product name <br/>
                    <input name="name" placeholder="Product Name" ref={register} />
                </label>
                <br/>
                <label>
                    Price <br/>
                    <input name="price" defaultValue="100$" ref={register} />
                </label>
                <br/>
                <label>
                    Weight <br/>
                    <input name="weight" defaultValue="100g" ref={register} />
                </label>
                <br/>
                <label>
                    Add Photo <br/>
                    <input name="exampleRequired" type="file" placeholder="Upload photo" onChange={handleImageUpload} />
                </label>    
                <br/>
                <input id="submit" type="submit" />
            </form>
        </div>
    );
};

export default ProductUpload;