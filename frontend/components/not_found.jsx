import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
    return (
        <div>
            <h1>
                Whoops, the page or event you are
                looking for was not found.
            </h1>
            <h3>
                If you feel this message is in error,
                please <Link to="/">let us know.</Link>
            </h3>
            <button>Create An Event</button>
            <button>Find An Event</button>
        </div>
    );
}

export default NotFound;