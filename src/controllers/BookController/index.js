const {
  getAllBooksModel,
  addBookModel,
  updateBookModel,
  deleteBookModel,
  getItemModel,
} = require("@models/BookModel");

exports.getListBooksController = (request, response) => {
  getAllBooksModel((results) => {
    response.json(results);
  });
};
exports.addBookController = (request, response) => {
  const params = { ...request.files[0], ...request.body, date: new Date() };
  console.log(request.body, request.files[0]);
  addBookModel(params, (results) => {
    response.json(results);
  });
};
exports.updateBookController = (request, response) => {
  const params = {
    ...request.files[0],
    ...request.body,
    date: new Date(),
  };
  updateBookModel(params, (results) => {
    response.send(results);
  });
};
exports.deleteBookController = (request, response) => {
  deleteBookModel(request.params.id, (results) => {
    response.json(results);
  });
};
exports.getItemController = (request, response) => {
  let id = request.params.id;
  getItemModel(id, (results) => {
    response.json(results);
  });
};
