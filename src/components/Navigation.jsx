import React from 'react';
import NavigationLink from './NavigationLink';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavigationLink
                        className="nav__link"
                        to="/"
                        title="Accueil"
                    />
                </li>
                <li>
                    <NavigationLink
                        className="nav__link"
                        to="/about"
                        title="À propos"
                    />
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
