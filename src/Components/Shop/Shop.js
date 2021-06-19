import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Inventory from '../Inventory/Inventory';

const Shop = () => {
    const [cart, setCart] = useState([]);
    
    const showAddToCart = true;

    function addToCart(productCart){
        const newCart = [...cart, productCart];
        setCart(newCart);
        // console.log(cart);
        // console.log(cart.price)
        const sameProduct = newCart.filter(pd => pd.key === productCart.key);
        const count = sameProduct.length;
        addToDatabaseCart(productCart.key, count);
    }
    const newData = fakeData.slice(0,10);
    return (
        <div>
            <div className = 'searchBox'>
                <input type="text" name="" id="" placeholder = "type here to search" />
                
            </div>
            <div className = 'displayItem'>
                <div className = 'showItem'>
                    {
                        newData.map(pd => <Product product = {pd} key = {pd.key} showAddToCart = {showAddToCart} addToCart = {addToCart}></Product>)
                    }
                </div>
                <Inventory cart = {cart}></Inventory>
            </div>
            
            
        </div>
    );
};

export default Shop;