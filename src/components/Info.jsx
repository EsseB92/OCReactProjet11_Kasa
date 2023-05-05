import React from 'react';
import Tag from './Tag';

const Info = ({ title, location, tags }) => {
    return (
        <div className="info">
            <h1>{title}</h1>
            <p>{location}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <Tag key={index} title={tag} />
                ))}
            </div>
        </div>
    );
};

export default Info;
