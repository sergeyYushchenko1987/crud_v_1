const { executeQueryToDatabase } = require("@servers/DataBaseserver");
const { getQuery } = require("@models/BookModel/query");
exports.getAllBooksModel = (callbackResults) => {
  const query = getQuery("forGetAll");
  executeQueryToDatabase(query, [], (results) => {
    if (results.length === 0) {
      results = { status: 204, description: "List is empty" };
    }
    callbackResults(results);
  });
};
exports.deleteBookModel = (id, callbackResults) => {
  const query = getQuery("forDelete");
  executeQueryToDatabase(query, [id], (results) => {
    results = { status: 204, description: "Item was deleted" };
    callbackResults(results);
  });
};
exports.addBookModel = (params, callbackResults) => {
  const { name, author, date, path: file } = params;
  let checkParams = [];
  let results = { status: null, description: "" };
  for (let prop in params) {
    if (!params[prop]) {
      checkParams.push(prop);
    }
  }
  if (checkParams.length !== 0) {
    results.status = 400;
    results.description = `You don't fill in  - ${checkParams}`;
    JSON.stringify(results);
    callbackResults(results);
  } else {
    const query = getQuery("forAdd");
    executeQueryToDatabase(query, [name, author, date, file], () => {
      console.log("add");
      results.status = 201;
      results.description = `Ok`;
      JSON.stringify(results);
      callbackResults(results);
    });
  }
};
exports.updateBookModel = (params, callbackResults) => {
  const { name, author, date, path: file, id } = params;
  let checkParams = [];
  let results = { status: null, description: "" };
  for (let prop in params) {
    if (!params[prop]) {
      checkParams.push(prop);
    }
  }
  if (checkParams.length !== 0) {
    results.status = 400;
    results.description = `You don't fill in ${checkParams}`;
    JSON.stringify(results);
    callbackResults(results);
  } else {
    const query = getQuery("forUpdate");
    executeQueryToDatabase(query, [name, author, date, file, id], () => {
      results.status = 202;
      results.description = `Updated`;
      JSON.stringify(results);
      callbackResults(results);
    });
  }
};
exports.getItemModel = (id, callbackResults) => {
  const query = getQuery("forGetItem");
  executeQueryToDatabase(query, [id], (results) => {
    if (results.length === 0) {
      results = { status: 204, description: "List is empty" };
    }
    callbackResults(results);
  });
};
