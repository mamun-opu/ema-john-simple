import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import Inventory from '../Inventory/Inventory';
import './Review.css'
import giphy from  '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleRemoveCart = ( productKey => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    })
    // setOrderPlaced(false);
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

      function handlePlaceOrder(){
        processOrder(cart);
          setCart([]);
          setOrderPlaced(true);
      }
    // console.log(cart)
    return (
        <div className = "review">
            <div className = 'productDesc'>
                {
                    orderPlaced && <><img src={giphy} alt="" />
                    <h4 style = {{color: 'green', marginTop: '20px'}}>Congrats....Order placed!!!!!</h4></>
                }
                
                
                {
                    cart.map(pd => <ReviewProduct product = {pd} key = {pd.key} handleRemoveCart = {handleRemoveCart}></ReviewProduct>)
                }
            </div>
            <Inventory cart = {cart}>
                <button onClick = {handlePlaceOrder}>Place order</button>
            </Inventory>
            
        </div>
    );
};

export default Review;