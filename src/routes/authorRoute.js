const { Router } = require('express');

const {
  getListAuthorsController,
  addAuthorController,
  updateAuthorController,
  deleteAuthorController,
  getItemAuthorsController,
} = require('@controllers/authorController');

const router = Router();

router.get('/', getListAuthorsController);
router.get('/:id', getItemAuthorsController);
router.post('/', addAuthorController);
router.put('/', updateAuthorController);
router.delete('/:id', deleteAuthorController);

module.exports = router;
