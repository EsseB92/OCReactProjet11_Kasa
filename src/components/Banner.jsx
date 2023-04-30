import React from 'react';

const Banner = ({ image, alt, text, size }) => {
    return (
        <section className={`banner ${size}`}>
            <img className="banner__image" src={image} alt={alt} />
            {text ? <h1 className="banner__text">{text}</h1> : null}
        </section>
    );
};

export default Banner;
