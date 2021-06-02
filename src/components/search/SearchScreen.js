import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    localStorage.setItem('search', q);
    
    const [inputText, setInputText] = useState(q);

    const hanldeInputChanged = ({ target }) => {
        setInputText(target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        history.push(`?q=${inputText}`);
    }

    let herosFiltered = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h1>Search screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSumbit}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={hanldeInputChanged}
                            value={inputText}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                            Search
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q === '' &&
                        <div className="alert alert-info">
                            Search an hero
                    </div>
                    }

                    {q !== '' && herosFiltered.length === 0 &&
                        <div className="alert alert-danger">
                            No hero found
                    </div>
                    }


                    {
                        herosFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />))
                    }
                </div>

            </div>
        </div>
    )
}
