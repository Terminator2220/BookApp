import React, { useState, useEffect } from 'react';
import "./BookApp.css"

function BookApp() {
  const [books, setBooks] = useState(() => {
    // Load books from local storage or use the default value
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [
      { id: 1, title: 'Книга 1', author: 'Автор 1', read: true },
      { id: 2, title: 'Книга 2', author: 'Автор 2', read: false },
      { id: 3, title: 'Книга 3', author: 'Автор 3', read: false },
      { id: 4, title: 'Книга 4', author: 'Автор 4', read: true },
      { id: 5, title: 'Книга 5', author: 'Автор 5', read: false },
    ];
    return storedBooks;
  });

  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Save books to local storage whenever the 'books' state changes
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
    <div className='contoiner'>
      <h1><img src= "ibooks.png" className='Ico'/>BookApp</h1>
      <input type="text" placeholder="Пошук..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='inpSearch'/>
      <ul>
        {books.filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((book) => (
            <li key={book.id}>
              <img src="./svg/book.svg" alt={book.title} onClick={() => toggleReadStatus(book.id)} className='bookImg'/>
              {book.title} - {book.author}
              <button onClick={() => deleteBook(book.id)} className='delButton'><img src="./svg/trash.svg" alt="delete"/></button>
              {book.read && <span>✔</span>}
            </li>
          ))}
      </ul>
      <div>
        <input type="text" placeholder="Назва книги" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} className='inp'/>
        <input type="text" placeholder="Автор книги" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} className='inp'/>
      </div>
      <div className='addBook'>
        <button onClick={addBook} className='addButton'>Додати</button>
      </div>
    </div>
  );
}

export default BookApp;
