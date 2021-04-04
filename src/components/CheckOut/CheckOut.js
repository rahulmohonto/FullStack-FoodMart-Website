import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './CheckOut.css'
import axios from 'axios';

const CheckOut = () => {

    const [checkOut, setCheckOut] = useState([]);
    const { _id } = useParams();
    // console.log(_id)
    useEffect(() => {
        async function fetchData() {
            await axios.get(`http://localhost:4200/products`)

                .then(res => setCheckOut(res.data))
        }
        fetchData();
    }, [checkOut])

    const result = checkOut.filter(ele =>
        (ele._id === _id)

    )
    // const { name, quantity, type, price, } = result?.[0]
    // console.log(name)
    console.log(result?.[0])

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


        </div>
    );
};

export default CheckOut;