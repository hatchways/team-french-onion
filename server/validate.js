const { check, validationResult } = require("express-validator");

const msgPrefix = "Please enter a valid";
const genderOptions = ["MALE", "FEMALE", "OTHER"];
const checkFalsyVal = { checkFalsy: true };

exports.validateRegister = [
  check("username", `${msgPrefix} username`).notEmpty(),
  check("email", `${msgPrefix} email address`).isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check("email", `${msgPrefix} email address`).isEmail(),
  check("password", "Password is required").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateNotificationDetails = [
  check("type", ` ${msgPrefix} notification type`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 10 }),
  check("title", "Title invalid")
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 20 }),
  check("description", ` ${msgPrefix} description`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 100 }),
  check("receipientEmail", ` ${msgPrefix} receipient email`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isEmail(),
  check("senderEmail", ` ${msgPrefix} sender email`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];


