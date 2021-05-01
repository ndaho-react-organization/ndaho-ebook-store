import React, { useState } from 'react';
import Button from './Button';
import TitleH2 from './TitleH2';

const FormAddBook = ({ addNewBook }) => {

    const [bookTitle, setBookTitle] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookPagesNumber, setBookPagesNumber] = useState(0)

    return (
        <div>
            { addNewBook &&
                <div>
                    <TitleH2>Affichage du formulaire d'ajout</TitleH2>
                    <form>
                        <div className="mb-3">
                            <label for="booktitle" className="form-label">Titre du livre</label>
                            <input type="text" className="form-control"
                                id="booktitle"
                                placeholder="Entrez le titre du livre"
                                value={bookTitle}
                                onChange={(event) => { setBookTitle(event.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="author" className="form-label">Auteur du livre</label>
                            <input type="text" className="form-control"
                                id="author"
                                placeholder="Entrez l'auteur du livre"
                                value={bookAuthor}
                                onChange={(event) => { setBookAuthor(event.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="pagesNumber" className="form-label">Nombre de pages</label>
                            <input type="number" className="form-control"
                                id="pagesNumber"
                                placeholder="Entrez le nombre de pages"
                                value={bookPagesNumber}
                                onChange={(event) => { setBookPagesNumber(event.target.value) }}
                            />
                        </div>
                    </form>
                    <Button btnCustomCss="btn-primary mb-3" >Valider</Button>
                </div>
            }
        </div>
    );
}

export default FormAddBook;