import React, { useState } from 'react';
import Button from './Button';
import TitleH2 from './TitleH2';

const FormAddBook = ({ bookForm, validation }) => {

    /*
    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookPagesNumber, setBookPagesNumber] = useState(0)
    */

    //Other methode:  WE CAN USE useState with an object (multiple values, sorta)
    const [form, setFormState] = useState({
        title: '',
        auteur: '',
        nbrePages: ''
    });

    // update form field --> by copy the previous various//
    const updateFormField = event => {
        setFormState({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleValidationForm = event => {
        event.preventDefault();
        //call validation for creating new book
        validation(form);
    }

    return (
        <div>
            { bookForm &&
                <div>
                    <TitleH2>Affichage du formulaire d'ajout</TitleH2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="booktitle" className="form-label">Titre du livre</label>
                            <input type="text" className="form-control"
                                id="booktitle"
                                placeholder="Entrez le titre du livre"
                                value={form.title}
                                name="title"
                                onChange={updateFormField}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Auteur du livre</label>
                            <input type="text" className="form-control"
                                id="author"
                                placeholder="Entrez l'auteur du livre"
                                value={form.auteur}
                                name="auteur"
                                onChange={updateFormField}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pagesNumber" className="form-label">Nombre de pages</label>
                            <input type="number" className="form-control"
                                id="pagesNumber"
                                placeholder="Entrez le nombre de pages"
                                value={form.nbrePages}
                                name="nbrePages"
                                onChange={updateFormField}
                            />
                        </div>
                    </form>
                    <Button btnCustomCss="btn-primary mb-3" clic={handleValidationForm} >Valider</Button>
                </div>
            }
        </div>
    );
}

export default FormAddBook;