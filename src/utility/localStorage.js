const getListedBooks = () => {
    const storedListedBooks = localStorage.getItem('listed-books');
    if (storedListedBooks) {
        return JSON.parse(storedListedBooks);
    }
    return [];
};

const saveListedBooks = (bookId) => {
    const storedListedBooks = getListedBooks();
    const exists = storedListedBooks.find(book => book === bookId);
    if (!exists) {
        storedListedBooks.push(bookId);
        localStorage.setItem('listed-books', JSON.stringify(storedListedBooks));
    }
};

const bookExists = (bookId) => {
    const storedListedBooks = getListedBooks();
    return storedListedBooks.includes(bookId);
};

export { saveListedBooks, getListedBooks, bookExists };