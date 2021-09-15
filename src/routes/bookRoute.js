const { Router } = require('express');
const { getUploadMiddleware } = require('@servers/MulterServer');

const upload = getUploadMiddleware();
const {
  getListBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
  getItemBooksController,
} = require('@controllers/bookController');

const router = Router();

router.get('/', getListBooksController);
router.get('/:id', getItemBooksController);

router.post('/', upload.any(), addBookController);
router.put('/', upload.any(), updateBookController);
router.delete('/:id', deleteBookController);

module.exports = router;
