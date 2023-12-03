import React from 'react';

const BookList = ({ books, searchTerm, toggleReadStatus, deleteBook }) => (
  <ul>
    {books
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((book) => (
        <li key={book.id}>
          <img src="./svg/book.svg" alt={book.title} onClick={() => toggleReadStatus(book.id)} className='bookImg'/>
          {book.title} - {book.author}
          <button onClick={() => deleteBook(book.id)} className='delButton'>
            <img src="./svg/trash.svg" alt="delete" />
          </button>
          {book.read && <span>✔</span>}
        </li>
      ))}
  </ul>
);

export default BookList;