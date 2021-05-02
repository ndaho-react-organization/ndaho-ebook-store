import React, { useEffect, useState } from 'react';
import Book from './components/Book';
import Button from "./components/Button";
import FormAddBook from "./components/FormAddBook";


const BookList = props => {

    const [books, setBooks] = useState([]);
    const [newBookForm, showNewBookForm] = useState(false)
    const [lastBookId, setLastBooId] = useState(0)

    const buttonLabel = newBookForm ? "Fermer l'ajout" : "Ajouter";

    useEffect(() => {
        setBooks([
            {
                id: 1,
                title: "Algo",
                auteur: "Honore1",
                nbrePages: 200,
            },
            {
                id: 2,
                title: "Algo2",
                auteur: "Honore2",
                nbrePages: 300,
            },
            {
                id: 3,
                title: "Algo3",
                auteur: "Honore3",
                nbrePages: 400,
            },
            {
                id: 4,
                title: "Algo4",
                auteur: "Honore4",
                nbrePages: 500,
            },

        ]);
        //set initial state --> a voir pour la recuperer depuis books 
        setLastBooId(4)
    }, [])


    const handleRemoveBook = bookId => {
        const booktoDeleteIndex = books.findIndex(book => {
            return book.id === bookId;
        })
        //copy the arrays to respect amuta...
        const newBooks = books.slice();
        //remove the element
        newBooks.splice(booktoDeleteIndex, 1)
        //set new books
        setBooks(newBooks);
    }

    const handleAddBook = () => showNewBookForm(!newBookForm);

    const handleValidionAddBookForm = form => {
        //copy for mutability
        const newBooks = [...books];
        const lastBookIndex = lastBookId + 1;
        const newBook = {
            id: lastBookIndex,
            ...form
        }

        //add new book
        newBooks.push(newBook);

        //set books
        setBooks(newBooks);

        //setLastBookId by using lastValue
        setLastBooId(lastBookId => lastBookId + 1)
    }


    return (
        <div>
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombres de pages</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map(book => {
                        const bookId = book.id;
                        return (
                            <tr key={book.id}>
                                <Book {...book} delete={() => handleRemoveBook(bookId)} />
                            </tr>)
                    })}
                </tbody>
            </table>

            <FormAddBook bookForm={newBookForm} validation={handleValidionAddBookForm} />
            <Button btnCustomCss="btn-success w-100" clic={handleAddBook}>{buttonLabel}</Button>
        </div>
    );
}


export default BookList;