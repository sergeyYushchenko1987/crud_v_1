const {
  getAllAuthorsBooksModel,
  getBooksAuthorsModel,
} = require('@models/authorsBooksModel');

exports.getAllAuthorsBooksController = (request, response) => {
  getAllAuthorsBooksModel((results) => {
    response.json(results);
  });
};
exports.getBooksAuthorsController = (request, response) => {
  const { author } = request.params;
  getBooksAuthorsModel(author, (results) => {
    response.json(results);
  });
};
