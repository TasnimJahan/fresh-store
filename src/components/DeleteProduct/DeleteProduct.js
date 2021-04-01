import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './DeleteProduct.css'
import DeleteIcon from '../../icons/delete.png'
import 'date-fns';


const DeleteProduct = ({product}) => {
    console.log(product);
    
    

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    
    
    
    const handleOrders = () => {
        const newOrders = {...loggedInUser, ...selectedDate};
        fetch('https://pumpkin-shortcake-83525.herokuapp.com/addOrders', {
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
            fetch(`https://pumpkin-shortcake-83525.herokuapp.com/deleteProduct/${id}`, {
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