import React from 'react';
import logo from '../../../src/images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className = 'Header'>
                <Link to= '/'>
                    <img src={logo} alt="" />
                </Link>
                
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