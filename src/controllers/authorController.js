const { checkParams } = require('@services/controllersService');
const {
  getAllAuthorsModel,
  addAuthorModel,
  updateAuthorModel,
  deleteAuthorModel,
  getItemAuthorModel,
} = require('@models/authorModel');

exports.getListAuthorsController = (request, response) => {
  getAllAuthorsModel((results) => {
    response.json(results);
  });
};
exports.addAuthorController = (request, response) => {
  const check = checkParams(request.body, 'authors', 'add');
  if (check) {
    response.json(check);
  } else {
    const { name, surname, email } = request.body;
    addAuthorModel([name, surname, email], (results) => {
      response.json(results);
    });
  }
};
exports.updateAuthorController = (request, response) => {
  const check = checkParams(request.body, 'authors', 'update');
  if (check) {
    response.json(check);
  } else {
    const { name, surname, email, id } = request.body;
    updateAuthorModel([name, surname, email, id], (results) => {
      response.json(results);
    });
  }
};
exports.deleteAuthorController = (request, response) => {
  deleteAuthorModel(request.params.id, (results) => {
    response.json(results);
  });
};
exports.getItemAuthorsController = (request, response) => {
  getItemAuthorModel(request.params.id, (results) => {
    response.json(results);
  });
};
