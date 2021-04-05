import React, { useState, useEffect } from 'react';
import ShowItem from '../ShowItems/ShowItem';
import './Home.css'

const Home = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://polar-taiga-18543.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))

        // setProduct(FakeData)
        // console.log(product)
    }, [])

    return (
        <div className="container text-light mt-5">
            <h3 className="text-info text-center">Buy fresh and new foods and grocery items from FoodMart</h3>
            <div className="row main">

                {
                    product.map(products =>
                        <ShowItem key={products._id} products={products}></ShowItem>)
                }
            </div>
        </div>
    );
};

export default Home;