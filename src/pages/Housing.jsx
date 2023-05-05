import React, { Fragment, useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import housingsData from '../data/housing.json';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Info from '../components/Info';
import Rating from '../components/Rating';
import Host from '../components/Host';

const Housing = () => {
    const { housingId } = useParams();

    // useMemo permet de trouver le logement qui correspond à "housingId" et de stocker le résultat dans la constante "housing"
    const housing = useMemo(() => {
        return housingsData.find((h) => h.id === housingId);
    }, [housingId]);

    if (!housing) {
        return <Navigate to="/error404" />;
    }

    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
    } = housing;

    return (
        <>
            <section className="carousel">
                <Carousel key="housingId" pictures={pictures} />
            </section>
            <section className="content">
                <Info title={title} location={location} tags={tags} />
                <div className="host-and-rating">
                    <Host host={host} />
                    <Rating rating={rating} />
                </div>
            </section>

            <section className="dropdowns">
                <Dropdown
                    className="description"
                    title="Description"
                    desc={description}
                />
                <Dropdown
                    className="equipment"
                    title="Équipements"
                    desc={equipments}
                />
            </section>
        </>
    );
};

export default Housing;
