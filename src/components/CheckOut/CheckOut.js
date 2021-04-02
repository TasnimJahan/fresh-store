import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../../App';
import './CheckOut.css';
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
    const productName= product.name;
    const productWeight=product.weight;
    const productId=product._id;



    
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
    const newOrders = {...loggedInUser, ...selectedDate,productName,productWeight,productId};
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
        <div className="checkoutDiv">
            <h1 style={{margin:'0 auto',width:'80%'}}>CheckOut</h1>
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
                        <td>{product.name}-{product.weight}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
           <Link to="/orders"><button onClick={handleOrders} class="btn btn-primary checkOutBtn">CheckOut</button></Link>


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
    );
};

export default CheckOut;