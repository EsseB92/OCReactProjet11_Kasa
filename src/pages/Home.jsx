import React, { Fragment } from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/home.png';
import housingsData from '../data/housing.json';
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <Banner
                image={bannerImage}
                alt="Bannière de la page d'accueil"
                text="Chez vous, partout et ailleurs"
                size="small"
            />
            <section className="housings">
                {housingsData.map((housing) => {
                    return (
                        <Card
                            key={housing.id}
                            link={`/housing/${housing.id}`}
                            image={housing.cover}
                            title={housing.title}
                        />
                    );
                })}
            </section>
        </>
    );
};

export default Home;
