import React from 'react';

const Button = (props) => {
    const styles = `btn ${props.btnType}`
    return (
        <button className={styles} onClick={props.clic}>
            {props.children}
        </button>
    );
};

export default Button;