import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageProduct = () => {
    const [showproducts, setShowProducts] = useState([])

    useEffect(() => {
        // const url = 'http://localhost:4200/products'
        // const { data } = axios.get(url)
        // console.log(data)

        async function fetchData() {
            await axios.get('http://localhost:4200/products')
                .then(res => setShowProducts(res.data))

        }
        fetchData()
    }, [])

    const deleteData = id => {
        fetch(`/deleteProduct/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // const { data } = showproducts;
    const deleteButton = () => {

        const container = document.getElementById('productHolder');
        // container.innerHTML = '';
        showproducts.forEach(pd => {
            console.log(pd.name)
            const productElement = document.createElement('div');

            productElement.innerHTML = `<div><strong>${pd.name}</strong>
                <p>${pd.price}</p>
                <button onClick="{()=>deleteData(pd._id)}">Delete Product</button></div>`
            container.appendChild(productElement)
        })
    }

    deleteButton();




    return (
        <body>

            <div id="productHolder">
                <h3>total products : {showproducts.length}</h3>
                <h3>This is for maneging products </h3>

            </div>
        </body>
    );
};

export default ManageProduct;