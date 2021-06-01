import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div class="col">
            <div class="card">
                <img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
                <div class="card-body">
                    <h5 class="card-title">{superhero}</h5>
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
