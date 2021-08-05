import React from 'react';
import giphy from '../../images/giphy.gif'

const Shipment = () => {
    return (
        <div style = {{textAlign: 'center'}}>
            <h2>Order Placed.....</h2>
            <img src={giphy} alt="" srcset="" />
        </div>
    );
};

export default Shipment;