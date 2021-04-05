import React, { useState, useEffect, useContext } from 'react';
import './Orders.css'
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4200/showOrders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    return (
        <div className="text-center bg-success w-75 ml-auto mr-auto p-4 product-container ">


            <h4>You have ordered {orders.length} products</h4>
            {
                orders.map(order => <div className="order-list text-center">
                    <h4> {order[0].name} {order[0].price}
                    </h4>
                </div>)
            }

        </div>
    );
};

export default Orders;