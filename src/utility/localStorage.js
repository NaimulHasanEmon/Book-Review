const getListedBooks = (keyName) => {
    const storedListedBooks = localStorage.getItem(keyName);
    if (storedListedBooks) {
        return JSON.parse(storedListedBooks);
    }
    return [];
};

const saveListedBooks = (bookId, keyName) => {
    const storedListedBooks = getListedBooks(keyName);
    const exists = storedListedBooks.find(book => book === bookId);
    if (!exists) {
        storedListedBooks.push(bookId);
        localStorage.setItem(keyName, JSON.stringify(storedListedBooks));
    }
};

const bookExists = (bookId, keyName) => {
    const storedListedBooks = getListedBooks(keyName);
    return storedListedBooks.includes(bookId);
};

export { saveListedBooks, getListedBooks, bookExists };