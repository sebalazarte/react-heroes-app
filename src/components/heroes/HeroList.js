import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-2 row-cols-md-4 g-6 animate__animated animate__fadeIn">
            {
                heroes.map(hero =>
                (<HeroCard
                    key={hero.id}
                    {...hero}
                />
                ))
            }
        </div>
    )
}
