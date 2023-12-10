import React, { useMemo } from 'react';

const BookItem = ({ book, toggleReadStatus, deleteBook }) => (
    <li>
        <img src="./svg/book.svg" alt={book.title} onClick={() => toggleReadStatus(book.id)} className='bookImg' />
        {book.title} - <b>{book.author}</b>
        <button onClick={() => deleteBook(book.id)} className='delButton'>
            <img src="./svg/trash.svg" alt="delete" />
        </button>
        {book.read && <span>✔</span>}
    </li>
);

const BookList = ({ books, searchTerm, toggleReadStatus, deleteBook }) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const bookList = useMemo(() => {

        return (
            books.filter(
                (book) =>
                    book.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                    book.author.toLowerCase().includes(lowerCaseSearchTerm)
            )
                .map((book) => (
                    <BookItem
                        key={book.id}
                        book={book}
                        toggleReadStatus={toggleReadStatus}
                        deleteBook={deleteBook}
                    />
                ))
        );
    }, [books, deleteBook, lowerCaseSearchTerm, toggleReadStatus]);

    return (
        <ul>
            {bookList}
        </ul>
    );
};

export default BookList;