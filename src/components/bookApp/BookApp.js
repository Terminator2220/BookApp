import React, { useState, useEffect, useMemo } from 'react';
import BookList from '../bookList/BookList';
import AddBookForm from '../AddBookForm/AddBookForm';
import './BookApp.css';


function BookApp() {
    const [books, setBooks] = useState(() => {
        const storedBooks = JSON.parse(localStorage.getItem('books')) || [
            { id: 1, title: 'JavaScript for Kids', author: 'Nick Morgan', read: true },
            { id: 2, title: 'HTML & CSS (English)', author: 'Emil Maltesen Frandsen', read: true },
            { id: 3, title: 'Mullumbimby', author: 'Melissa Lucashenko (UQP)', read: false },
            { id: 4, title: 'After The Lights Go Out', author: 'Lili Wilkinson (Allen & Unwin)', read: true },
            { id: 5, title: 'Gravity is the Thing', author: 'Jaclyn Moriarty (Pan Macmillan)', read: false },
        ];
        return storedBooks;
    });

    const [newBook, setNewBook] = useState({ title: '', author: '' });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const addBook = () => {
        if (newBook.title && newBook.author) {
            setBooks([
                ...books,
                { id: books.length + 1, ...newBook, read: false },
            ]);
            setNewBook({ title: '', author: '' });
        }
    };

    const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const toggleReadStatus = (id) => {
        setBooks(
            books.map((book) =>
                book.id === id ? { ...book, read: !book.read } : book
            )
        );
    };
    return (
        <div className='conteiner'>
            <h1>
                <img src="ibooks.png" className='Ico' />
                BookApp
                <sub className='subRight'>®</sub>
            </h1>
            <input type="text" placeholder="Пошук..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='inpSearch' />
            <BookList books={books} searchTerm={searchTerm} toggleReadStatus={toggleReadStatus} deleteBook={deleteBook} />
            <AddBookForm newBook={newBook} setNewBook={setNewBook} addBook={addBook} />
        </div>
    );
}

export default BookApp;