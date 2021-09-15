const { executeQueryToDatabase } = require('@servers/DataBaseserver');
const queries = require('@services/queries');
const { resultsIsEmpty } = require('@services/modelsService');

exports.getAllBooksModel = (callbackResults) => {
  const query = queries.books.getAll;
  executeQueryToDatabase(query, [], (results) => {
    const resultsStatus = resultsIsEmpty(results);
    if (resultsStatus) {
      callbackResults(resultsStatus);
    } else {
      callbackResults(results);
    }
  });
};
exports.deleteBookModel = (id, callbackResults) => {
  const query = queries.books.delete;
  executeQueryToDatabase(query, [id], () => {
    callbackResults({ status: 204, description: 'Item was deleted' });
  });
};
exports.addBookModel = (params, authorId, callbackResults) => {
  let query = queries.books.add;
  executeQueryToDatabase(query, params, (results) => {
    query = queries.books.addBooksAuthors;
    executeQueryToDatabase(query, [results.insertId, authorId], () => {
      callbackResults({ status: 201, description: 'Ok' });
    });
  });
};
exports.updateBookModel = (params, callbackResults) => {
  const query = queries.books.update;
  executeQueryToDatabase(query, params, () => {
    callbackResults({ status: 201, description: 'Ok' });
  });
};
exports.getItemBookModel = (id, callbackResults) => {
  const query = queries.books.getItem;
  executeQueryToDatabase(query, [id], (results) => {
    const resultsStatus = resultsIsEmpty(results);
    if (resultsStatus) {
      callbackResults(resultsStatus);
    } else {
      callbackResults(results);
    }
  });
};
