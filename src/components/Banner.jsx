import React from 'react';

const Banner = ({ image, alt, text }) => {
    return (
        <section className="banner">
            <img className="banner__image" src={image} alt={alt} />
            {text ? <h1 className="banner__text">{text}</h1> : null}
        </section>
    );
};

export default Banner;
