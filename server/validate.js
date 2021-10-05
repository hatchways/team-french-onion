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

exports.validateProfileDetails = [
  check("firstName", ` ${msgPrefix} first name`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 20 }),
  check("lastName", ` ${msgPrefix} last name`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 20 }),
  check("gender", ` ${msgPrefix} gender`)
    .exists(checkFalsyVal)
    .isIn(genderOptions),
  check("birthday", ` ${msgPrefix} birthday format`)
    .exists(checkFalsyVal)
    .toDate(),
  check("email", ` ${msgPrefix} email address`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isEmail(),
  check("phoneNumber", ` ${msgPrefix} phone number`)
    .exists(checkFalsyVal)
    .trim()
    .isMobilePhone(),
  check("location", ` ${msgPrefix} location`)
    .exists(checkFalsyVal)
    .trim()
    .escape()
    .isLength({ max: 10 }),
  check("profilePic", ` ${msgPrefix} image url`)
    .exists(checkFalsyVal)
    .escape()
    .isURL(),
  check("description", ` ${msgPrefix} description format`)
    .exists(checkFalsyVal)
    .escape()
    .isLength({ max: 100 }),
  check("availability", ` ${msgPrefix} availability format`)
    .exists(checkFalsyVal)
    .isArray(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateMongoId = [
  check("_id", "Invalid profile ID").exists(checkFalsyVal).isMongoId(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
