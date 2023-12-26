import React, { useState, useEffect, useMemo, useCallback } from 'react';
import BookList from '../bookList/BookList';
import AddBookForm from '../AddBookForm/AddBookForm';
import './BookApp.css';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';

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
    const [maxId, setMaxId] = useState(10);
    const [newBook, setNewBook] = useState({ title: '', author: '' });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const addBook = useCallback(() => {
        if (newBook.title && newBook.author) {
            const isDuplicate = books.some(
                (book) => book.title === newBook.title && book.author === newBook.author
            );

            if (isDuplicate) {
                $("#dialog").dialog({
                    dialogClass: "no-close",
                    buttons: [
                        {
                            text: "OK",
                            click: function () {
                                $(this).dialog("close");
                            }
                        }
                    ]
                });
            } else {
                $("#dialogBook").dialog({
                    dialogClass: "no-close",
                    buttons: [
                        {
                            text: "✔",
                            click: function () {
                                $(this).dialog("close");
                                setBooks((prevBooks) => [
                                    ...prevBooks,
                                    { id: maxId + 1, ...newBook, read: false },
                                ]);
                                setNewBook({ title: '', author: '' });
                                setMaxId(maxId + 1);
                            }
                        }
                    ]
                });
            }
        }
    }, [newBook, setBooks, maxId, books]);

    const deleteBook = useCallback((id) => {
        $("#dialogDellBook").dialog({
            dialogClass: "no-close",
            buttons: [
                {
                    text: "Сancel",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Ok",
                    click: function () {
                        $(this).dialog("close");
                        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
                    }
                }
            ]
        });
    }, [setBooks]);

    const toggleReadStatus = useCallback((id) => {
        $("#dialogReadStatus").dialog({
            dialogClass: "no-close",
            buttons: [
                {
                    text: "Сancel",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Ok",
                    click: function () {
                        $(this).dialog("close");
                        setBooks((prevBooks) =>
                            prevBooks.map((book) =>
                                book.id === id ? { ...book, read: !book.read } : book
                            )
                        );
                    }
                }
            ]
        });
    }, [setBooks]);

    const memoizedBookList = useMemo(
        () => (
            <BookList
                books={books}
                searchTerm={searchTerm}
                toggleReadStatus={toggleReadStatus}
                deleteBook={deleteBook}
            />
        ),
        [books, searchTerm, toggleReadStatus, deleteBook]
    );
    return (
        <div className='conteiner'>
            <h1>
                <img src="ibooks.png" alt='Ico' className='Ico' />
                BookApp
                <sub className='subRight'>®</sub>
            </h1>
            <input
                type="text"
                placeholder="Пошук..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='inpSearch'
            />
            {memoizedBookList}
            <AddBookForm newBook={newBook} setNewBook={setNewBook} addBook={addBook} />
            <div id="dialog" title="Massage" className='dialogBox'>
                <p>You are trying to add a book that is already in the book list. Just change the name of the book you want to add!🤭</p>
            </div>
            <div id="dialogBook" title="Massage" className='dialogBox'>
                <p>The book was successfully added!</p>
            </div>
            <div id="dialogDellBook" title="Massage" className='dialogBox'>
                <p>Are you sure you want to delete this book?</p>
            </div>
            <div id="dialogReadStatus" title="Massage" className='dialogBox'>
                <p>Are you sure you want to swich read status to this book?</p>
            </div>
        </div>
    );
}

export default BookApp;
