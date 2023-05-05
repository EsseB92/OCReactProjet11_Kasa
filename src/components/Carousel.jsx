import React, { useEffect, useRef, useState } from 'react';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

const Carousel = ({ pictures }) => {
    // Gestion de l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Création de la référence pour la "div" qui affiche le "backgroundImage"
    const backgroundImage = useRef();

    // Mise à jour du "backgroundImage" quand currentIndex change
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
        <>
            {pictures.length > 1 ? (
                <div className="carousel__container">
                    <img
                        onClick={previous}
                        className="carousel__prev"
                        src={leftArrow}
                        alt="previous"
                    />
                    <img
                        onClick={next}
                        className="carousel__next"
                        src={rightArrow}
                        alt="next"
                    />
                    <p className="carousel__counter">
                        {currentIndex + 1 + '/' + pictures.length}
                    </p>
                    <div
                        className="carousel__slide"
                        ref={backgroundImage}
                    ></div>
                </div>
            ) : (
                <div className="carousel__slide" ref={backgroundImage}></div>
            )}
        </>
    );
};

export default Carousel;
