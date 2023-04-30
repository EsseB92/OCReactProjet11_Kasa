import React, { Fragment } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import housingsData from '../data/housing.json';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

const Housing = () => {
    const { housingId } = useParams();

    // useMemo permet de trouver le logement qui correspond à "housingId" et de stocker le résultat dans la constante "housing"
    const housing = React.useMemo(() => {
        return housingsData.find((h) => h.id === housingId);
    }, [housingId]);

    console.log(!housing);

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
    const [firstname, lastname] = host.name.split` `;

    return (
        <>
            <section className="carousel">
                <Carousel key="housingId" pictures={pictures} />
            </section>
            <section className="content">
                <div className="info">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <Tag key={index} title={tag} />
                        ))}
                    </div>
                </div>
                <div className="host-and-rating">
                    <div className="host">
                        <div className="host__name">
                            <p>{firstname}</p>
                            <p>{lastname}</p>
                        </div>
                        <img
                            className="host__image"
                            src={host.picture}
                            alt=""
                        />
                    </div>

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
