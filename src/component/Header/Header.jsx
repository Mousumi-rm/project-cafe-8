import React from 'react';
import './header.css'
import logo from '../../../public/images/logo.png'
import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>  
            </div>
             <img className='header-img' src={profile} alt="" />
        </nav> 
        
    );
};

export default Header;