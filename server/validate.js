const { check, validationResult } = require("express-validator");

exports.validateDataUrl = [
  check("profilePic", "Invalid data URL").exists(checkFalsyVal).isBase64().isDataURI(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
