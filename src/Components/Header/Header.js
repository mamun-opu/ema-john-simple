import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import { userContext } from '../../App';
import './Header.css';


const Header = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <div>
            <div className = 'Header'>
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div>
                <nav className = 'navigation'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Order Review</Link>
                    <Link to="/inventory">Manage Inventory here</Link>
                    <p>{loggedInUser?.email}</p>
                </nav>
                
            </div>
        </div>
    );
};

export default Header;