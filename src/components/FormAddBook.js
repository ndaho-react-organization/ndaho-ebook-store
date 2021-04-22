import React from 'react';
import TitleH2 from './TitleH2';

const FormAddBook = ({ addNewBook }) => {
    return (
        <div>
            {addNewBook && <TitleH2>Affichage du formulaire d'ajout</TitleH2>}
        </div>
    );
}

export default FormAddBook;