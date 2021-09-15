const { checkParams, formatDate } = require('@services/controllersService');
const {
  getAllBooksModel,
  addBookModel,
  updateBookModel,
  deleteBookModel,
  getItemBookModel,
} = require('@models/bookModel');

exports.getListBooksController = (request, response) => {
  getAllBooksModel((results) => {
    response.json(results);
  });
};
exports.addBookController = (request, response) => {
  request.body.file = request.files[0].filename;
  const date = formatDate();
  const check = checkParams(request.body, 'books', 'add');
  if (check) {
    response.json(check);
  } else {
    const { name, file, authorId } = request.body;
    addBookModel([name, date, file], authorId, (results) => {
      response.json(results);
    });
  }
};
exports.updateBookController = (request, response) => {
  request.body.file = request.files[0].filename;
  const date = formatDate();
  const check = checkParams(request.body, 'books', 'update');
  if (check) {
    response.json(check);
  } else {
    const { name, file, id } = request.body;
    updateBookModel([name, date, file, id], (results) => {
      response.json(results);
    });
  }
};
exports.deleteBookController = (request, response) => {
  deleteBookModel(request.params.id, (results) => {
    response.json(results);
  });
};
exports.getItemBooksController = (request, response) => {
  const { id } = request.params;
  getItemBookModel(id, (results) => {
    response.json(results);
  });
};
