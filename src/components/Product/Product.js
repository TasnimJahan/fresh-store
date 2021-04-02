import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Product.css'
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
import { Link } from 'react-router-dom';



const Product = ({product}) => {
    console.log(product);
    const productName= product.name

const [loggedInUser,setLoggedInUser] = useContext(UserContext);
console.log(loggedInUser);

const [selectedDate, setSelectedDate] = React.useState({
    checkIn: new Date(),
    checkOut: new Date()
});

const handleCheckInDate = (date) => {
    const newDates = {...selectedDate}
    newDates.checkIn = date;
    setSelectedDate(newDates);
};

const handleCheckOutDate = (date) => {
    const newDates = {...selectedDate}
    newDates.checkOut = date;
    setSelectedDate(newDates);
};

const handleOrders = () => {
    const newOrders = {...loggedInUser, ...selectedDate,productName};
    console.log("new orders golo=",newOrders);
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



    return (
        <div className="productDiv" style={{marginBottom:'4%'}}>


           
                <div style={{ height:'90%'}} className="col">
                    <div style={{boxShadow:'10px 10px 20px grey', borderRadius:'10px',height:'25rem'}} className="card">
                        <img style={{ height:'55%',borderRadius:'10px'}} src={product.imageUrl} alt=""/>
                        <div style={{flex:'none'}}className="card-body">
                            <h5 className="card-title">{product.name} </h5>
                        </div>
                        <div className="card-footer" style={{backgroundColor:'#FFFFFF',height:'15%'}}>
                            <p className="text-muted" style={{display: 'flex',justifyContent: 'space-between'}}> <span><h5>{product.price}</h5></span> <span><p><Link to={`/checkOut/${product._id}`}><button className="btn btn-success"onClick={handleOrders}> <small>Buy Now</small> </button></Link></p></span>
                             </p>
                        </div>
                    </div>
                


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid id="datepicker" container justify="space-around">
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Check In Date"
                    value={selectedDate.checkIn}
                    onChange={handleCheckInDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Check Out Date"
                    format="dd/MM/yyyy"
                    value={selectedDate.checkOut}
                    onChange={handleCheckOutDate}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </Grid>
         </MuiPickersUtilsProvider>
         </div>
        </div>
    );
};

export default Product;