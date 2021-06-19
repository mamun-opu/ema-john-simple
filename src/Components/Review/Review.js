import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { removeFromDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart, setCart] = useState([]);

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
    return (
        <div>
            {
                cart.map(pd => <ReviewProduct product = {pd} key = {pd.key} handleRemoveCart = {handleRemoveCart}></ReviewProduct>)
            }
        </div>
    );
};

export default Review;