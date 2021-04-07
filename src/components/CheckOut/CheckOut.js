import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './CheckOut.css'
import axios from 'axios';
import Orders from '../Orders/Orders';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const CheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser)
    const [checkOut, setCheckOut] = useState([]);
    const { _id } = useParams();
    // console.log(_id)
    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://polar-taiga-18543.herokuapp.com/products`)

                .then(res => setCheckOut(res.data))
            // console.log(checkOut)
        }
        fetchData();
    }, [checkOut])

    const result = checkOut.filter(element =>
        (element._id === _id)

    )

    const handleOrder = () => {

        const newOrder = { ...loggedInUser, ...result }
        fetch('https://polar-taiga-18543.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>

            <h6>This is for product checkout</h6>
            <Table className="table" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result[0] && result?.[0].name}</td>
                        <td>{result[0] && result?.[0].quantity}</td>
                        <td>{result[0] && result?.[0].type}</td>

                        <td>{result[0] && result?.[0].price}</td>
                    </tr>

                </tbody>
            </Table>


            <Button to="/orders" onClick={handleOrder} className="btn btn-info float-right mr-2">Order Product</Button>

            <PrivateRoute path="/orders">
                <Orders />
            </PrivateRoute>
        </div>
    );
};

export default CheckOut;