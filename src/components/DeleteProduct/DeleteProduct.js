import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './DeleteProduct.css'
import DeleteIcon from '../../icons/delete.png'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { Button } from '@material-ui/core';
import Orders from '../Orders/Orders';


const DeleteProduct = ({product}) => {
    console.log(product);
    
    

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    
    
    
    const handleOrders = () => {
        const newOrders = {...loggedInUser, ...selectedDate};
        fetch('http://localhost:5000/addOrders', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrders)
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data);
        })
    }
    
    
    
    
        const deleteEvent=(id)=>{
            // console.log(id);
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log("successfully deleted");
                console.log("result ta bujhinai= result holo=", result);
                if(result){
                    console.log("owaoo deleted");
                    location.reload();
                }
            })
            
        }
    
        return (
            // <div>
    
    
       <tbody>
            <tr>
            <td scope="col">{product.name}</td>
            <td scope="col">{product.price}</td>
            <td onClick={() =>deleteEvent(product._id)} scope="col"><img className="deleteIcon" src={DeleteIcon} alt=""/></td>
        </tr>
       </tbody>
                
                   

            // </div>
        );
};

export default DeleteProduct;