import React from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="Logo de Kasa" />
                </Link>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink
                                className={(nav) =>
                                    nav.isActive
                                        ? 'nav__link nav__link--active'
                                        : 'nav__link'
                                }
                                to="/"
                            >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(nav) =>
                                    nav.isActive
                                        ? 'nav__link nav__link--active'
                                        : 'nav__link'
                                }
                                to="/about"
                            >
                                A propos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
