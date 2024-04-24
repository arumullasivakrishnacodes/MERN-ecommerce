import React, { useContext } from "react";
import '../Footer/Footer.css';
import whatsappImg from '../../Assets/Images/whatsapp-icon.png';
import instagramImg from '../../Assets/Images/instagram-icon.png';
import twitterxImg from '../../Assets/Images/twitter-icon.png';
import BagIcon from '../../Assets/Images/shop-bag-image.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Footer () {
    const {ScrollTop} = useContext(ShopContext);

    const handleScrollTop = () => {
        ScrollTop();
    }

    return (
        <div className="footer-main-container">
            <Link to='/'  onClick={handleScrollTop()}><div className="logo-container"><span><img src={BagIcon} alt="" /></span>SHOP</div></Link>
            <div className="footer-links-container">
                <div className="footer-link">About</div>
                <div className="footer-link">Offers</div>
                <div className="footer-link">Products</div>
                <div className="footer-link">Legal</div>
                <div className="footer-link">Contact</div>
            </div>
            <div className="footer-icons-container">
                <img src={twitterxImg} alt="" />
                <img src={instagramImg} alt="" />
                <img src={whatsappImg} alt="" />
            </div>
            <div className="footer-divider"></div>
            <div className="copyright-container">Copyright @ 2024 - All Rights Reserved.</div>
        </div>
    );
}

export default Footer;