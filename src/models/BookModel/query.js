exports.getQuery = (subjectQuery) => {
  switch (subjectQuery) {
    case 'forGetAll':
      return 'SELECT * FROM books';
    case 'forUpdate':
      return 'UPDATE books SET book_name = ?, book_author = ?, book_date = ?, book_file = ? WHERE id = ?';
    case 'forDelete':
      return 'DELETE FROM books WHERE id = ?';
    case 'forAdd':
      return 'INSERT INTO books (id, book_name, book_author, book_date, book_file) VALUES(NULL, ?, ?, ?, ?)';
    case 'forGetItem':
      return 'SELECT * FROM books WHERE id = ?';
    default:
      return 'You should create such query';
  }
};
