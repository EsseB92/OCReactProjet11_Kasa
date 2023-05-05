import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
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
    );
};

export default Navigation;
