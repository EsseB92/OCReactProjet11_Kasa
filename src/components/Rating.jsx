import React from 'react';
import filledStar from '../assets/filledStar.png';
import emptyStar from '../assets/emptyStar.png';

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: rating }, (x, i) => {
                return <img key={i} src={filledStar} alt="Etoile pleine" />;
            })}
            {Array.from({ length: 5 - rating }, (x, i) => {
                return <img key={i} src={emptyStar} alt="Etoile vide" />;
            })}
        </div>
    );
};

export default Rating;
