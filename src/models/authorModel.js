const { executeQueryToDatabase } = require('@servers/DataBaseserver');
const { resultsIsEmpty } = require('@services/modelsService');
const queries = require('@services/queries');

exports.getAllAuthorsModel = (callbackResults) => {
  const query = queries.authors.getAll;
  executeQueryToDatabase(query, [], (results) => {
    const resultsStatus = resultsIsEmpty(results);
    if (resultsStatus) {
      callbackResults(resultsStatus);
    } else {
      callbackResults(results);
    }
  });
};
exports.deleteAuthorModel = (id, callbackResults) => {
  const query = queries.authors.delete;
  executeQueryToDatabase(query, [id], () => {
    callbackResults({ status: 204, description: 'Item was deleted' });
  });
};
exports.addAuthorModel = (params, callbackResults) => {
  const query = queries.authors.add;
  executeQueryToDatabase(query, params, () => {
    callbackResults({ status: 204, description: 'Item was added.' });
  });
};
exports.updateAuthorModel = (params, callbackResults) => {
  const query = queries.authors.update;
  executeQueryToDatabase(query, params, () => {
    callbackResults({ status: 201, description: 'Item was updated' });
  });
};
exports.getItemAuthorModel = (id, callbackResults) => {
  const query = queries.authors.getItem;
  executeQueryToDatabase(query, [id], (results) => {
    const resultsStatus = resultsIsEmpty(results);
    if (resultsStatus) {
      callbackResults(resultsStatus);
    } else {
      callbackResults(results);
    }
  });
};
