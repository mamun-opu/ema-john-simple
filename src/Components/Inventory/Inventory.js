import React from 'react';
import './Inventory.css'
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const cart = props.cart;
    // console.log(cart.length);
    const totalPrice = cart.reduce((total, current) => total + current.price, 0);

    console.log(totalPrice);


    // const totalPrice = cart.reduce((total, prd) => total + prd.price,0);
    // console.log(props);
    return (
        <div className = 'inventory'>
            <h3>Order summery</h3>
            <p>Items ordered: {cart.length}</p>
            <br />
            <p><small>items price: ${totalPrice}</small></p>
            <br />
            <button><Link to="/review">Review Cart</Link></button>
        </div>
    );
};

export default Inventory;