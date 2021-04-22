import React from 'react';

const Title = (props) => {
    return (
        <h1 className="border border-dark p2 mt-2 text-white text-center bg-primary pounded">
            {props.children}
        </h1>
    );
}

export default Title;