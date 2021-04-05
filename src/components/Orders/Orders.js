import React, { useState, useEffect, useContext } from 'react';
import './Orders.css'
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://polar-taiga-18543.herokuapp.com/showOrders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))


    }, [loggedInUser.email])

    return (
        <div className="text-center bg-success w-75 ml-auto mr-auto p-4 product-container ">


            <h4>You have ordered {orders.length} products</h4>
            {
                orders.map(order => <div className="order-list text-center">
                    <h4> <span>{order[0].name}</span>  <span>{order[0].price}</span>
                    </h4>
                </div>)
            }

        </div>
    );
};

export default Orders;