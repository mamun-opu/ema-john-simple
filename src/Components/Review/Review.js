import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import Inventory from '../Inventory/Inventory';
import './Review.css'
// import giphy from  '../../images/giphy.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    // const [orderPlaced, setOrderPlaced] = useState(false);

    const handleRemoveCart = ( productKey => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    })
     useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const counts = productKeys.map(key => savedCart[key]);
        const productToReview = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(productToReview);
        // console.log(counts
        //     );
        setCart(productToReview);

        // console.log(productKeys);
    }, []);

    const history = useHistory();

      function handleProceedOrder(){
        // processOrder(cart);
        //   setCart([]);
        //   setOrderPlaced(true);
        cart.map(pd => removeFromDatabaseCart(pd.key))
        


        history.push('/shipment');
      }
    // console.log(cart)
    return (
        <div className = "review">
            <div className = 'productDesc'>
                {
                    cart.length === 0 ? <h1>No Product added to cart</h1> : cart.map(pd => <ReviewProduct product = {pd} key = {pd.key} handleRemoveCart = {handleRemoveCart}></ReviewProduct>)
                }
                
            </div>
            <Inventory cart = {cart}>
                <button onClick = {handleProceedOrder}> <FontAwesomeIcon icon= {faCheckCircle}/> proceed order</button>
            </Inventory>
            
        </div>
    );
};

export default Review;