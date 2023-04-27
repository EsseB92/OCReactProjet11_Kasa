import React from 'react';
import logo from '../assets/logo-white.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
