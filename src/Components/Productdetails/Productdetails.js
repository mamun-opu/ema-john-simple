import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';


const Productdetails = () => {
    const {productKey} = useParams();
    const thisProduct = fakeData.find(data => data.key === productKey);
    thisProduct.showAddToCart = false;
    // console.log(thisProduct);
    return (
        <div>
            <Product product = {thisProduct} showAddToCart = {thisProduct.showAddToCart}></Product>
        </div>
    );
};

export default Productdetails;