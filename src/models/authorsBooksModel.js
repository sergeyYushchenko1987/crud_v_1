const { executeQueryToDatabase } = require('@servers/DataBaseserver');
const queries = require('@services/queries');

exports.getAllAuthorsBooksModel = (callbackResults) => {
  const query = queries.booksAuthors.getAll;
  executeQueryToDatabase(query, [], (results) => {
    callbackResults(results);
  });
};
exports.getBooksAuthorsModel = (author, callbackResults) => {
  const query = queries.booksAuthors.getBooksAuthors;
  executeQueryToDatabase(query, [author], (results) => {
    callbackResults(results);
  });
};
