const multer = require('multer');
const path = require('path');
const config = require('config');

const pathMulter = config.get('constants.multer.directory');

exports.getUploadMiddleware = () => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve('./', pathMulter));
    },
    filename(req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, `${uniqueSuffix}_${file.originalname}`);
    },
  });
  return multer({ storage });
};
