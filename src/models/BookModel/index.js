const { executeQueryToDatabase } = require('@servers/DataBaseserver');
const { getQuery } = require('@models/BookModel/query');

exports.getAllBooksModel = (callbackResults) => {
  const query = getQuery('forGetAll');
  let resultsStatus = {};
  executeQueryToDatabase(query, [], (results) => {
    if (results.length === 0) {
      resultsStatus = { status: 204, description: 'List is empty' };
      callbackResults(resultsStatus);
    }
    callbackResults(results);
  });
};
exports.deleteBookModel = (id, callbackResults) => {
  const query = getQuery('forDelete');
  let resultsStatus = {};
  executeQueryToDatabase(query, [id], () => {
    resultsStatus = { status: 204, description: 'Item was deleted' };
    callbackResults(resultsStatus);
  });
};
exports.addBookModel = (params, callbackResults) => {
  const { name, author, date, path: file } = params;
  const checkParams = [];
  const resultsStatus = { status: null, description: '' };
  Object.keys(params).forEach((key) => {
    if (!params[key]) {
      checkParams.push(key);
    }
  });
  if (checkParams.length !== 0) {
    resultsStatus.status = 400;
    resultsStatus.description = `You don't fill in  - ${checkParams}`;
    callbackResults(resultsStatus);
  } else {
    const query = getQuery('forAdd');
    executeQueryToDatabase(query, [name, author, date, file], () => {
      resultsStatus.status = 201;
      resultsStatus.description = 'Ok';
      callbackResults(resultsStatus);
    });
  }
};
exports.updateBookModel = (params, callbackResults) => {
  const { name, author, date, path: file, id } = params;
  const checkParams = [];
  const resultsStatus = { status: null, description: '' };
  Object.keys(params).forEach((key) => {
    if (!params[key]) {
      checkParams.push(key);
    }
  });
  if (checkParams.length !== 0) {
    console.log(checkParams);
    resultsStatus.status = 400;
    resultsStatus.description = `You don't fill in ${checkParams}`;
    callbackResults(resultsStatus);
  } else {
    const query = getQuery('forUpdate');
    executeQueryToDatabase(query, [name, author, date, file, id], () => {
      resultsStatus.status = 202;
      resultsStatus.description = 'Updated';
      callbackResults(resultsStatus);
    });
  }
};
exports.getItemModel = (id, callbackResults) => {
  const query = getQuery('forGetItem');
  executeQueryToDatabase(query, [id], (results) => {
    if (results.length === 0) {
      results = { status: 204, description: 'List is empty' };
      callbackResults(results);
    } else {
      callbackResults(results);
    }
  });
};
