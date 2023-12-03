import React from 'react';

const AddBookForm = ({ newBook, setNewBook, addBook }) => (
    <div>
    <input type="text" placeholder="Назва книги" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} className='inp' />
    <input type="text" placeholder="Автор книги" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} className='inp' />
    <div className='addBook'>
      <button onClick={addBook} className='addButton'>
        Додати
      </button>
    </div>
  </div>
);

export default AddBookForm;