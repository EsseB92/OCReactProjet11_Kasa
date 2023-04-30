import React, { useEffect, useRef, useState } from 'react';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const backgroundImage = useRef();

    useEffect(() => {
        if (backgroundImage.current) {
            backgroundImage.current.style.backgroundImage = `url(${pictures[currentIndex]})`;
        }
    }, [pictures, currentIndex]);

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
        <div className="carousel__container">
            {pictures.length > 0 ? (
                <img
                    onClick={previous}
                    className="carousel__prev"
                    src={leftArrow}
                    alt="previous"
                    width="46.68"
                    height="79.2"
                />
            ) : (
                ''
            )}
            {pictures.length > 0 ? (
                <img
                    onClick={next}
                    className="carousel__next"
                    src={rightArrow}
                    alt="next"
                    width="46.68"
                    height="79.2"
                />
            ) : (
                ''
            )}
            {pictures.length > 0 ? (
                <p className="carousel__counter">
                    {currentIndex + 1 + '/' + pictures.length}
                </p>
            ) : (
                ''
            )}
            <div className="carousel__slide" ref={backgroundImage}></div>
        </div>
    );
};

export default Carousel;
