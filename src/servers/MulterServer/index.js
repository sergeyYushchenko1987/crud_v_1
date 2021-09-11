const multer = require("multer");
const path = require("path");
const config = require("config");
const pathMulter = config.get("constants.multer.directory");

exports.getUploadMiddleware = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./", pathMulter));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, `${uniqueSuffix}__${file.originalname}`);
    },
  });
  const upload = multer({ storage: storage });

  return upload;
};
