import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageProduct.css';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const ManageProduct = () => {
    const [showproducts, setShowProducts] = useState([])

    useEffect(() => {

        async function fetchData() {
            await axios.get('https://polar-taiga-18543.herokuapp.com/products')
                .then(res => setShowProducts(res.data))
            // console.log(showproducts)

        }
        fetchData()
    }, [showproducts])


    const deleteData = id => {
        // console.log(event.target)
        fetch(`https://polar-taiga-18543.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    Alert('deleted successfully')
                }
                console.log('product deleted', result)
            })
        console.log('button clicked', id)
    }

    const LoadProduct = () => {
        // const container = document.getElementById('productHolder');
        return showproducts.map(item =>
        (
            <div className="product-container">
                <div className="product-div">
                    <Table className="table" striped bordered hover size="lg">
                        {/* <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Type</th>
                                <th>Price</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>

                                <td> <strong>{item.name}</strong></td>
                                <td> <span >{item.quantity}</span></td>
                                <td>{item.type}</td>
                                <td> <span >{item.price}</span></td>
                                <td><button className="product-delete-button" onClick={() => deleteData(item._id)}>Delete Product</button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
        )

    }


    return (
        <body>

            <div id="productHolder">
                <h3>total products : {showproducts.length}</h3>

                <LoadProduct />

            </div>
        </body>
    );
};

export default ManageProduct;