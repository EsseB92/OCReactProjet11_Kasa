import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <h1>Page non trouvée</h1>
            <section className="error404">
                <div>
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas</p>
                </div>

                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
        </Fragment>
    );
};

export default NotFound;
