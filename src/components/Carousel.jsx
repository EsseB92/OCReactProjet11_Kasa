import React, { useState } from 'react';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${pictures[currentIndex]})`,
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '25px',
        zIndex: 1,
        cursor: 'pointer',
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '25px',
        zIndex: 1,
        cursor: 'pointer',
    };
    const counterStyles = {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        bottom: '25px',
        zIndex: 1,
        color: 'white',
    };

    const previous = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const next = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel-container" style={sliderStyles}>
            <img
                onClick={previous}
                className="carousel__prev"
                style={leftArrowStyles}
                src={leftArrow}
                alt="previous"
                width="46.68"
                height="79.2"
            />
            <img
                onClick={next}
                className="carousel__next"
                style={rightArrowStyles}
                src={rightArrow}
                alt="next"
                width="46.68"
                height="79.2"
            />
            <p className="carousel__counter" style={counterStyles}>
                {currentIndex + 1 + '/' + pictures.length}
            </p>
            <div className="carousel__slide" style={slideStyles}></div>
        </div>
    );
};

export default Carousel;
