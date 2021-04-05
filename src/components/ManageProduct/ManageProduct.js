import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const LoadProduct = () => {

        // const container = document.getElementById('productHolder');

        return showproducts.map(item =>
        (
            <div>
                <div>
                    <strong>{item.name}</strong>
                    <p>{item.price}</p>
                    <button onClick={() => deleteData(item._id)}>Delete Product</button>
                </div>
            </div>
        )
        )

    }


    const deleteData = (event, _id) => {
        console.log(event.target)
        console.log('button clicked', _id)
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