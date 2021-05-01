import React from 'react';
import Button from "./Button";

const Book = (props) => {

    return (
        <>
            <td>{props.title}</td>
            <td>{props.auteur}</td>
            <td>{props.nbrePages}</td>
            <td>
                <Button btnCustomCss="btn-warning" clic={props.update}>Modifier</Button>
            </td>
            <td>
                <Button btnCustomCss="btn-danger" clic={props.delete}>Supprimer</Button>
            </td>
        </>
    );

}

export default Book