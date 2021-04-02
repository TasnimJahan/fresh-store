import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './DeleteProduct.css'
import DeleteIcon from '../../icons/delete.png'
import 'date-fns';


const DeleteProduct = ({product}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
        const deleteEvent=(id)=>{
            fetch(`https://pumpkin-shortcake-83525.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log("successfully deleted");
                if(result){           
                    document.getElementById("productRow").style.display="none"
                }
            })
            
        }
    
        return (
       <tbody id="productRow">
            <tr>
                <td scope="col">{product.name}</td>
                <td scope="col">{product.price}</td>
                <td scope="col">{product.weight}</td>
                <td onClick={() =>deleteEvent(product._id)} scope="col"><img className="deleteIcon" src={DeleteIcon} alt=""/></td>
            </tr>
       </tbody>
        );
};

export default DeleteProduct;