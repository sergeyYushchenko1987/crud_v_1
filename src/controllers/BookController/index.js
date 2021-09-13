const {
  getAllBooksModel,
  addBookModel,
  updateBookModel,
  deleteBookModel,
  getItemModel,
} = require('@models/BookModel');
exports.getListBooksController = (request, response) => {
  getAllBooksModel((results) => {
    response.json(results);
  });
};
exports.addBookController = (request, response) => {
  const params = { ...request.files[0], ...request.body, date: new Date() };
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
    response.json(results);
  });
};
exports.deleteBookController = (request, response) => {
  deleteBookModel(request.params.id, (results) => {
    response.json(results);
  });
};
exports.getItemController = (request, response) => {
  const { id } = request.params;
  getItemModel(id, (results) => {
    response.json(results);
  });
};
