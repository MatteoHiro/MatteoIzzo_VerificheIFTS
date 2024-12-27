import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    function mobileMenuOpen(){
        setMobileMenuVisible(true);
        if (mobileMenuVisible){
            setMobileMenuVisible(false);
            document.querySelector('.menuMobileContainer h3').display= 'none';
        }
    }

    return (
        // Navbar e menu mobile
        <>
            <nav className="navbarContainer">
                <h2>Youshop!</h2>
                <ul className="navActions">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="menuMobileContainer">
                <span className="hamburger" onClick={mobileMenuOpen}>
                    ☰
                </span>
                {mobileMenuVisible && (
                    <ul className="navActionsMobile">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                )}
            </div>
        </>
    )
}

export default Navbar;