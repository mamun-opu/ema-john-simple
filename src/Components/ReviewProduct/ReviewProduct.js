import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    console.log(props);
    const {img, name, price, quantity, key} = props.product; 
    return (
        <div className = "reviewCart">
                <div className = 'viewProduct'>
                    <img src={img} alt="" />
                </div>
                <div className = 'Details'>
                    <h2>{name}</h2>
                    <br />
                    <p>Price: ${price}</p>
                    <br />
                    <p>quantity: {quantity}</p>
                    <br />
                    <button onClick = {()=> props.handleRemoveCart(key)}> Remove Product</button>
                </div>
        </div>
    );
};

export default ReviewProduct;