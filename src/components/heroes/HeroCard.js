import React from 'react'
import { Link } from 'react-router-dom'

import {heroImages} from './heroImages';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="col">
            <div className="card">
                <img
                    src={heroImages(`./${id}.jpg`)}
                    className="card-img-top"
                    alt={superhero} />
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    {alter_ego !== characters &&
                        <p className="card-text">
                            {characters}
                        </p>
                    }
                    <p className="card-muted">
                        {first_appearance}
                    </p>
                    <Link to={`./hero/${id}`}>Mas...</Link>
                </div>
            </div>
        </div>
    )
}
