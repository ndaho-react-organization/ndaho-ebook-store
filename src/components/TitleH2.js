import React from 'react';

const TitleH2 = (props) => {
    return (
        <h2 className="border border-dark p2 mt-2 text-white text-center bg-primary pounded">
            {props.children}
        </h2>
    );
}

export default TitleH2;