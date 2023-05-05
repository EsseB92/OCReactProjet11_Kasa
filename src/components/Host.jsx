import React from 'react';

const Host = ({ host }) => {
    const [firstname, lastname] = host.name.split(' ');
    return (
        <div className="host">
            <div className="host__name">
                <p>{firstname}</p>
                <p>{lastname}</p>
            </div>
            <img
                className="host__image"
                src={host.picture}
                alt={`PP de ${firstname} ${lastname}`}
            />
        </div>
    );
};

export default Host;
