import React, { useEffect, useState } from 'react';
import Book from './components/Book';

const BookList = (props) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        console.log("on first render")
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
    }, [])

    const handleRemoveBook = (bookId) => {
        const booktoDeleteIndex = books.findIndex(book => {
            return book.id == bookId;
        })
        //copy the arrays to respect amuta...
        const newBooks = books.slice();
        //remove the element
        newBooks.splice(booktoDeleteIndex, 1)
        //set new books
        setBooks(newBooks);
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
        </div>
    );
}


export default BookList;