import React, { useContext, useState } from "react";
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom'
import cartIcon from '../../Assets/Images/cart-icon.png';
import wishlistIcon from '../../Assets/Images/wishlist-icon.png'
import profileIcon from '../../Assets/Images/profile-icon.png';
import searchIcon from '../../Assets/Images/search-icon.png';
import MicImg from '../../Assets/Images/mic-image.png'
import { ShopContext } from "../../Context/ShopContext";

function Navbar () {
    const {cartItems} = useContext(ShopContext);
    const [searchenabled, setSearchEnabled] = useState(false);
    const [searchinpvalue, setSearchinpValue] = useState('');

    const handleSearchEnable = () => {
        setSearchEnabled(!searchenabled);
    }

    const handleSearchKeywords = (e) => {
        setSearchinpValue(e.target.value);
    }

    return (
        <div className="navbar-main-container row">
            <NavLink to="/"><div className="logo-container col-3">SHOP</div></NavLink>
            <div className="navbar-category-container col-4">
                <NavLink to='/men'><div className="category">Men</div></NavLink>
                <NavLink to='/women'><div className="category">Women</div></NavLink>
                <NavLink to='/kids'><div className="category">Kids</div></NavLink>
            </div>
            <div className="nav-icons-container col-5">
                <img src={searchIcon} onClick={handleSearchEnable} alt="" />
                <NavLink to="/profile"><img src={profileIcon} alt="profile" /></NavLink>
                <NavLink to="/wishlist"><img src={wishlistIcon} alt="wishlist" /><span className="wishlist-count">0</span></NavLink>
                <NavLink to="/cart"><img src={cartIcon} alt="cart" /><span className="cart-count">{cartItems.length > 0 ? cartItems.length : 0}</span></NavLink>
            </div>
            
            <div className={`search-popup-container ${searchenabled ? '' : 'd-none'}`}>
                <div className="search-engine-components">
                    <div className="popupclose" onClick={handleSearchEnable}><i class="bi bi-x"></i></div>
                    <div>
                        <input className="main-search-input" type="text" placeholder="Search for products ..." value={searchinpvalue}  onChange={handleSearchKeywords}/>
                        <img className="mic-image" src={MicImg} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;