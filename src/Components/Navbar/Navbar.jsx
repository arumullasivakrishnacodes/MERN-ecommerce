import React from "react";
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom'
import cartIcon from '../../Images/cart-icon.png';
import wishlistIcon from '../../Images/wishlist-icon.png';
import profileIcon from '../../Images/profile-icon.png';
import searchIcon from '../../Images/search-icon.png';

function Navbar () {
    return (
        <div className="navbar-main-container row">
            <NavLink to="/"><div className="logo-container col-3">SHOP</div></NavLink>
            <div className="navbar-category-container col-4">
                <div className="category">Men</div>
                <div className="category">Women</div>
                <div className="category">Kids</div>
            </div>
            <div className="nav-icons-container col-5">
                <img src={searchIcon} alt="" />
                <NavLink to="/profile"><img src={profileIcon} alt="profile" /></NavLink>
                <NavLink to="/wishlist"><img src={wishlistIcon} alt="wishlist" /><span className="wishlist-count">0</span></NavLink>
                <NavLink to="/cart"><img src={cartIcon} alt="cart" /><span className="cart-count">0</span></NavLink>
            </div>
        </div>
    )
}

export default Navbar;