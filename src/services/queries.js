module.exports = {
  books: {
    getAll: 'SELECT * FROM books',
    update:
      'UPDATE books SET book_name = ?, book_date = ?, book_file = ? WHERE book_id = ?',
    delete: 'DELETE FROM books WHERE book_id = ?',
    add: 'INSERT INTO books (book_id, book_name, book_date, book_file) VALUES(NULL, ?, ?, ?)',
    getItem: 'SELECT * FROM books WHERE book_id = ?',
    addBooksAuthors:
      'INSERT INTO books_authors (book_id,author_id) VALUES(?,?)',
  },
  authors: {
    getAll: 'SELECT * FROM authors',
    update:
      'UPDATE authors SET author_name = ?, author_last_name = ?, author_email = ? WHERE author_id = ?',
    delete: 'DELETE FROM authors WHERE author_id = ?',
    add: 'INSERT INTO authors (author_id, author_name, author_last_name, author_email) VALUES (NULL, ?, ?, ?)',
    getItem: 'SELECT * FROM authors WHERE author_id = ?',
  },
  booksAuthors: {
    getAll:
      'SELECT b.book_name, b.book_date, a.author_name FROM books b INNER JOIN books_authors c ON c.book_id = b.book_id LEFT JOIN authors a ON c.author_id = a.author_id',
    getBooksAuthors:
      'SELECT b.book_name, b.book_date, a.author_name FROM books b INNER JOIN books_authors c ON c.book_id = b.book_id LEFT JOIN authors a ON c.author_id = a.author_id WHERE c.author_id = ?',
  },
};
