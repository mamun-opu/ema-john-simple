import React from 'react';
import logo from '../../../src/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className = 'Header'>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav className = 'navigation'>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;