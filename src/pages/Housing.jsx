import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import housingsData from '../data/housing.json';
import Tag from '../components/Tag';
import Rating from '../components/Rating';

const Housing = () => {
    let title,
        pictures,
        description,
        host,
        rating,
        location,
        equipments,
        tags,
        firstname,
        lastname;

    let { housingId } = useParams();

    const containerStyles = {
        width: '100%',
        height: '415px',
        margin: '0 auto',
    };

    housingsData.map((housing) => {
        if (housing.id === housingId) {
            title = housing.title;
            pictures = housing.pictures;
            description = housing.description;
            host = housing.host;
            rating = housing.rating;
            location = housing.location;
            equipments = housing.equipments;
            tags = housing.tags;
            return true;
        } else {
            return false;
        }
    });

    [firstname, lastname] = host.name.split` `;

    //const slides = [{ url }];
    return (
        <Fragment>
            <section className="carousel" style={containerStyles}>
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
        </Fragment>
    );
};

export default Housing;
