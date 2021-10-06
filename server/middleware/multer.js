const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({});

const upload = multer({
  storage,
  limit: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFiletype(file, cb);
  },
});

const checkFiletype = (file, cb) => {
  const validExtName = /jpeg|jpg|png|gif/;
  const fileTypeCheck = validExtName.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimeTypeCheck = validExtName.test(file.mimetype);

  if (fileTypeCheck && mimeTypeCheck) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};

module.exports = upload;
