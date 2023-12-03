import React, { useCallback } from 'react';

const AddBookForm = React.memo(({ newBook, setNewBook, addBook }) => {
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
    }, [setNewBook]);

    const handleAddBook = useCallback(() => {
        addBook();
    }, [addBook]);

    return (
        <div>
            <input
                type="text"
                placeholder="Назва книги"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                className='inp'
            />
            <input
                type="text"
                placeholder="Автор книги"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                className='inp'
            />
            <div className='addBook'>
                <button onClick={handleAddBook} className='addButton'>
                    Додати
                </button>
            </div>
        </div>
    );
});

export default AddBookForm;
