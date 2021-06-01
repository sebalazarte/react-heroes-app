import React from 'react'

export const LoginScreen = ({history}) => {

    const handleClick = () => {
        history.push('/');
    }

    return (
        <div className="container mt-s">
            <h1>Login</h1>
            <hr/>
            <button 
                className="btn btn-primary" 
                type="button"
                onClick={handleClick}>
                Login
            </button>
        </div>
    )
}
