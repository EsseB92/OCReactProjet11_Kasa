import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Logo de Kasa" />
                </Link>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
