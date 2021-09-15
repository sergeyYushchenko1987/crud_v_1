module.exports = {
  authors: {
    add: ['name', 'surname', 'email'],
    update: ['name', 'surname', 'email', 'id'],
  },
  books: {
    add: ['name', 'file', 'authorId'],
    update: ['name', 'file', 'id', 'authorId'],
  },
};
