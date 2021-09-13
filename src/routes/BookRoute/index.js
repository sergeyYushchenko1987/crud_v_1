const { Router } = require('express');
const { getUploadMiddleware } = require('@servers/MulterServer');

const upload = getUploadMiddleware();

const {
  getListBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
  getItemController,
} = require('@controllers/BookController');

const router = Router();

router.get('/', getListBooksController);
router.get('/:id', getItemController);

router.post('/', upload.any(), addBookController);
router.put('/', upload.any(), updateBookController);
router.delete('/:id', deleteBookController);

module.exports = router;
