import React from 'react';
import './Inventory.css'

const Inventory = (props) => {
    const cart = props.cart;
    // console.log(props.cart);
    // const totalPrice = cart.reduce((total, current) => total + current.price * current.quantity, 0);
    let totalPrice = 0;
    let shippingCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = product.price*product.quantity + totalPrice;
        shippingCost = product.shipping + shippingCost;
    }

    // cart.reduce((total, prod) => console.log(total,prod),0)
    // console.log(totalPrice);
    // debugger;

    // const totalPrice = cart.reduce((total, prd) => total + prd.price,0);
    // console.log(props);
    return (
        <div className = 'inventory'>
            <h3>Order summery</h3>
            <p>Items ordered: {cart.length}</p>
            <p><small>items price: ${totalPrice}</small></p>
            <p><small>shipping cost: ${shippingCost}</small></p>
            <p>total cost: ${totalPrice + shippingCost}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Inventory;