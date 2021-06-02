import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from '../auth/AuthContext'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleClick = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        const search = localStorage.getItem('search') || '';

        dispatch({
            type: types.login,
            payload: {
                name: 'sebastian',
                logged: true
            }
        });

        if (lastPath === "/search") {
            history.replace(`${lastPath}?q=${search}`);
        }
        else {
            history.replace(lastPath);
        }
    }

    return (
        <div className="container mt-s">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                type="button"
                onClick={handleClick}>
                Login
            </button>
        </div>
    )
}
