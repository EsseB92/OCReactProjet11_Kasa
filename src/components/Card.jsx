import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ link, image, title }) => {
    return (
        <article className="card">
            <Link to={link}>
                <img className="card__image" src={image} alt={title} />
                <div className="card__overlay"></div>
                {title ? <h2 className="card__text">{title}</h2> : null}
            </Link>
        </article>
    );
};

export default Card;
