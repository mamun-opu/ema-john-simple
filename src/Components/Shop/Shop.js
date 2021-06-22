import React from 'react';
import './Shop.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Inventory from '../Inventory/Inventory';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [cart, setCart] = useState([]);
    
    const showAddToCart = true;

    function addToCart(productCart){
        const toBeAddedKey = productCart.key;
        // let newCart = [...cart, productCart];
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count;
        let newCart;
        // let count = sameProduct.length; 
        
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            productCart.quantity = 1;
            newCart = [...cart, productCart];
            count = 1;
        }
        
        setCart(newCart);
        addToDatabaseCart(productCart.key, count);

        // console.log(cart);
        // console.log(cart.price)
        // const sameProduct = newCart.filter(pd => pd.key === productCart.key);
        // const count = sameProduct.length;
        // productCart.quantity = count;
        
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
            // console.log(savedCart);
            const productKeys = Object.keys(savedCart);
            const orderedItem = productKeys.map(key => {
                const item = fakeData.find(data => data.key === key)
                // console.log(item, savedCart[key]);
                item.quantity = savedCart[key];
                return item; 
            });
            // fakeData.map()
            // console.log(orderedItem);
            setCart(orderedItem)
    }, [])
    

    const newData = fakeData.slice(0,10);
    console.log(newData);
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
                <Inventory cart = {cart}>
                    <button><Link to="/review"> <FontAwesomeIcon icon= {faCheckCircle}/> Review Cart</Link></button>
                </Inventory>
            </div>
            
            
        </div>
    );
};

export default Shop;