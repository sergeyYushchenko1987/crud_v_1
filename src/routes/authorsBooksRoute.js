const { Router } = require('express');

const {
  addAuthorsBooksController,
  getAllAuthorsBooksController,
  getBooksAuthorsController,
} = require('@controllers/authorsBooksController');

const router = Router();

router.get('/', getAllAuthorsBooksController);
router.get('/:author', getBooksAuthorsController);

module.exports = router;
