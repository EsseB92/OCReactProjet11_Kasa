import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ className, to, title }) => {
    return (
        <NavLink
            className={(nav) =>
                nav.isActive
                    ? `${className} ${className}--active`
                    : `${className}`
            }
            to={to}
        >
            {title}
        </NavLink>
    );
};

export default NavigationLink;
